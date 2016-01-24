(ns fireball.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.pprint :as pp]
            [externals.react-motion :as motion]
            [externals.react :as rt]))

(enable-console-print!)

(defonce app-state (atom {:fireballs [] :angle 25}))

;; -----------------------------------------------------------
;; Helpers

(defn rest-or-vector [[_ & rest]]
  (into [] rest))

(defn calc-angle-from-cursor [e]
  (let [rads
    (js/Math.atan (/ (- (.. js/window -innerHeight) (.. e -pageY))
                     (.. e -pageX)))]
    (* (/ 180 (.. js/Math -PI)) rads)))

;; -----------------------------------------------------------
;; Parsing

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmulti mutate om/dispatch)

(defmethod mutate 'fireball/create
  [{:keys [state] :as env} _ params]
  {:value {:keys [:fireballs]}
   :action #(swap! state update-in [:fireballs] conj params)})

(defmethod mutate 'fireball/destroy
  [{:keys [state]}]
  {:value {:keys [:fireballs]}
   :action #(swap! state update-in [:fireballs] rest-or-vector)})

(defmethod mutate 'dinosaur/rotate
  [{:keys [state]} _ params]
  {:value {:keys [:angle]}
   :action #(swap! state assoc-in [:angle] (:angle params))})

;; -----------------------------------------------------------
;; Handlers

(defn handle-click [e this]
  (om/transact! this `[(fireball/create ~{:x (+ -3 (.. e -pageX))
                                          :y (+ 10 (.. e -pageY))
                                          :t (.getTime (js/Date.))})])
  (.setTimeout js/window #(om/transact! this `[(fireball/destroy)]) 10000))

(defn handle-move [e this]
  (om/transact! this `[(dinosaur/rotate ~{:angle (calc-angle-from-cursor e)})]))

;; -----------------------------------------------------------
;; Components

(defui Fireball
  Object
  (render [this]
    (let [[{:keys [x y]} h] [(om/props this) (.. js/window -innerHeight)]]
      (rt/create motion/standard
        #js {:defaultStyle #js {:x 0 :y 0 :o (motion/spring 1)}
             :style #js {:x (motion/spring x #js [200 26])
                         :y (motion/spring (- h y) #js [350 26])
                         :o (motion/spring 0 #js [20 30])}}
        (fn [i]
          (dom/div #js {:className "fireball"
                        :style #js {:left (.. i -x)
                                    :bottom (.. i -y)
                                    :opacity (.. i -o)
                                    :animationDelay (str (rand-int 400) "ms")}}))))))

(def fireball (om/factory Fireball
  {:keyfn #(clojure.string/join (vals %))}))

(defui Dinosaur
  Object
  (render [this]
    (let [{angle :angle} (om/props this)]
      (dom/div #js {:className "dinosaur"
                    :style #js {:transform (str "rotate(" (- -10 angle) "deg)")}}))))

(def dinosaur (om/factory Dinosaur))

(defui Canvas
  static om/IQuery
  (query [this]
    [:fireballs :angle])
  Object
  (render [this]
    (let [{:keys [fireballs angle]} (om/props this)]
      (apply dom/div #js {:className "canvas"
                          :onClick #(handle-click % this)
                          :onMouseMove #(handle-move % this)}
                     (cons (dinosaur {:angle angle})
                       (if-not (= fireballs :not-found)
                         (map fireball fireballs)))))))

(def reconciler
  (om/reconciler
    {:state app-state
     :parser (om/parser {:read read :mutate mutate})}))

(om/add-root! reconciler
  Canvas (gdom/getElement "app"))
