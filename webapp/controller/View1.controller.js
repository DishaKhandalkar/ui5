sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("ui5.controller.View1", {
            onInit: function () {

            },            
            onPress: function () {
                new MessageBox.show("HTML stands for Hyper Text Markup Language",{
                    title:"Answer"
                });
                
            },
            onPress1: function () {
                new MessageBox.show("CSS stands for Cascading Style Sheet",{
                    title:"Answer"
                });
            
            }
        });
    });
