(ns zerg.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn new-board [n]
(vec (repeat n (vec (repeat n 0)))))

(defonce app-state
  (atom {:text "Nightshell TicTacToe"
         :board (new-board 3)}))

(defn zerg []
  [:div
   [:h1 (:text @app-state)]
   [:svg
    {:view-box "0 0 3 3"
     :width 500
     :height 500}
    (for [i (range (count (:board @app-state)))
          j (range (count (:board @app-state)))]
      [:rect {:width 0.9
              :height 0.9
              :fill "gold"
              :x i 
              :y j
              :on-click
              (fn rect-click [e]
                (prn "Clicked" i j))}])]])
(reagent/render-component [zerg]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (swap! app-state assoc-in [:text] "Hi")
  )
