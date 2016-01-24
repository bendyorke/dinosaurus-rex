(ns externals.react)

(defn create [component props children]
  (let [React (.-React js/window)]
    (.createElement React component (clj->js props) children)))
