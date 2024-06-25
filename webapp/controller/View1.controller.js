sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,FilterOperator,Filter) {
        "use strict";

        return Controller.extend("com.sap.kt.list.listofholidays.controller.View1", {
            onInit: function () {
               var jsonData={"holiday":[{
                  year:2021
               },{
                  year:2022
               },{
                year:2023
             },{
                year:2024
             },{
                year:2025
             },{
                year:2026
             },{
                year:2027
             },{
                year:2028
             },{
                year:2029
             },{
                year:2030
             },{
                year:2031
             }]}

             var oModel=new sap.ui.model.json.JSONModel();
             oModel.setData(jsonData);
             this.getView().setModel(oModel,"oModelData");
             //this.onchange();
            },
            onChange:function(oEvent){
             var jsonData2={"list":[{
                "kt":"Pongal/Makara Sankranthi",
                "date":"15-Ja-2024",
                "day":"Monday",
                "bangalore":"X",
                "chennai":"X",
                "hyderabad":"X",
                "delhi":" ",
                "pune":" ",
                "kolkata":" "
             },{
                "kt":"Republic Day",
                "date":"26-Jan-2024",
                "day":"Friday",
                "bangalore":"X",
                "chennai":"X",
                "hyderabad":"X",
                "delhi":"X",
                "pune":"X",
                "kolkata":"X"
           },{
            "kt":"Maha Shiva Ratri",
            "date":"08-Mar-2024",
            "day":"Friday",
            "bangalore":" ",
            "chennai":" ",
            "hyderabad":" ",
            "delhi":"X",
            "pune":" ",
            "kolkata":"X"
           },{
            "kt":"Holi",
            "date":"25-Mar-2024",
            "day":"Monday",
            "bangalore":" ",
            "chennai":" ",
            "hyderabad":" ",
            "delhi":"X",
            "pune":"X",
            "kolkata":"X"
           },{
            "kt":"Ugadi",
            "date":"09-Apr-2024",
            "day":"Tuesday",
            "bangalore":"X",
            "chennai":"X",
            "hyderabad":"X",
            "delhi":" ",
            "pune":" ",
            "kolkata":" "
           },{
            "kt":"Ramzan",
            "date":"11-Apr-2024",
            "day":"Thursday",
            "bangalore":"X",
            "chennai":"X",
            "hyderabad":"X",
            "delhi":"X",
            "pune":"X",
            "kolkata":"X"
           },{
            "kt":"May Day",
            "date":"01-May-2024",
            "day":"Wednesday",
            "bangalore":"X",
            "chennai":"X",
            "hyderabad":"X",
            "delhi":"X",
            "pune":"X",
            "kolkata":"X"
           },{
            "kt":"Independence Day",
            "date":"15-Aug-2024",
            "day":"Thursday",
            "bangalore":"X",
            "chennai":"X",
            "hyderabad":"X",
            "delhi":"X",
            "pune":"X",
            "kolkata":"X"
           },{
            "kt":"Ganesh Chaturthi",
            "date":"06-sep-2024",
            "day":"Friday",
            "bangalore":" ",
            "chennai":" ",
            "hyderabad":" ",
            "delhi":" ",
            "pune":"X",
            "kolkata":" "
           },{
            "kt":"Gandhi Jayanti",
            "date":"02-Oct-2024",
            "day":"Wednesday",
            "bangalore":"X",
            "chennai":"X",
            "hyderabad":"X",
            "delhi":"X",
            "pune":"X",
            "kolkata":"X"
           },{
            "kt":"Ayudha Puja/Maha Navami",
            "date":"11-Oct-2024",
            "day":"Friday",
            "bangalore":"X",
            "chennai":"X",
            "hyderabad":"X",
            "delhi":"X",
            "pune":"X",
            "kolkata":"X"
           },{
            "kt":"Deepavali",
            "date":"01-Nov-2024",
            "day":"Friday",
            "bangalore":"X",
            "chennai":"X",
            "hyderabad":"X",
            "delhi":"X",
            "pune":"X",
            "kolkata":"X"
           },{
            "kt":"Christmas",
            "date":"25-Dec-2024",
            "day":"Wednesday",
            "bangalore":"X",
            "chennai":"X",
            "hyderabad":"X",
            "delhi":"X",
            "pune":"X",
            "kolkata":"X"
           }]}

           var oModel1=new sap.ui.model.json.JSONModel(jsonData2);
           var oColItem = this.getView().byId("colId");
           //this.getView().byId("idProductsTable").setModel(oModel)
           this.getView().setModel(oModel1,"listHolidays");
          // this.getView().byId("idHolidaysTable").bindAggregation("items","/list",oColItem);
             
          
 var oFilter=new Filter("date",FilterOperator.Contains,oEvent.getSource().getValue());
           this.byId("idHolidaysTable").getBinding("items").filter(oFilter);
            },
         onAfterRender:function(oEvent){
            debugger;
         },
         onBeforeRender:function(oEvent){
            debugger;
         }
        });
    });
