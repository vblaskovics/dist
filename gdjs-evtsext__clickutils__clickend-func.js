gdjs.evtsExt__ClickUtils__ClickEnd = {};
gdjs.evtsExt__ClickUtils__ClickEnd.GDclickableObjects1= [];
gdjs.evtsExt__ClickUtils__ClickEnd.GDclickableObjects2= [];

gdjs.evtsExt__ClickUtils__ClickEnd.conditionTrue_0 = {val:false};
gdjs.evtsExt__ClickUtils__ClickEnd.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ClickUtils__ClickEnd.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__ClickUtils__ClickEnd.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__ClickUtils__ClickEnd.mapOfGDgdjs_46evtsExt_95_95ClickUtils_95_95ClickEnd_46GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.evtsExt__ClickUtils__ClickEnd.GDclickableObjects1});gdjs.evtsExt__ClickUtils__ClickEnd.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("clickable"), gdjs.evtsExt__ClickUtils__ClickEnd.GDclickableObjects1);

gdjs.evtsExt__ClickUtils__ClickEnd.condition0IsTrue_0.val = false;
gdjs.evtsExt__ClickUtils__ClickEnd.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__ClickUtils__ClickEnd.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__ClickUtils__ClickEnd.mapOfGDgdjs_46evtsExt_95_95ClickUtils_95_95ClickEnd_46GDclickableObjects1Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__ClickUtils__ClickEnd.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__ClickUtils__ClickEnd.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.evtsExt__ClickUtils__ClickEnd.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ClickUtils__ClickEnd.func = function(runtimeScene, clickable, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"clickable": clickable
},
  _objectArraysMap: {
"clickable": gdjs.objectsListsToArray(clickable)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ClickUtils__ClickEnd.GDclickableObjects1.length = 0;
gdjs.evtsExt__ClickUtils__ClickEnd.GDclickableObjects2.length = 0;

gdjs.evtsExt__ClickUtils__ClickEnd.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

