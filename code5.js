gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDguiBtnObjects1= [];
gdjs.New_32sceneCode.GDguiBtnObjects2= [];
gdjs.New_32sceneCode.GDguiFaultMsgObjects1= [];
gdjs.New_32sceneCode.GDguiFaultMsgObjects2= [];
gdjs.New_32sceneCode.GDguiWinMsgObjects1= [];
gdjs.New_32sceneCode.GDguiWinMsgObjects2= [];
gdjs.New_32sceneCode.GDguiWindowObjects1= [];
gdjs.New_32sceneCode.GDguiWindowObjects2= [];
gdjs.New_32sceneCode.GDrect2Objects1= [];
gdjs.New_32sceneCode.GDrect2Objects2= [];
gdjs.New_32sceneCode.GDrect1Objects1= [];
gdjs.New_32sceneCode.GDrect1Objects2= [];
gdjs.New_32sceneCode.GDlogObjects1= [];
gdjs.New_32sceneCode.GDlogObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrect2Objects1Objects = Hashtable.newFrom({"rect2": gdjs.New_32sceneCode.GDrect2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrect2Objects1Objects = Hashtable.newFrom({"rect2": gdjs.New_32sceneCode.GDrect2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrect1Objects1Objects = Hashtable.newFrom({"rect1": gdjs.New_32sceneCode.GDrect1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrect1Objects1Objects = Hashtable.newFrom({"rect1": gdjs.New_32sceneCode.GDrect1Objects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("rect2"), gdjs.New_32sceneCode.GDrect2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickStart.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrect2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "none";
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("rect2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rect2"), gdjs.New_32sceneCode.GDrect2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrect2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "rect2";
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("log"), gdjs.New_32sceneCode.GDlogObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDlogObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDlogObjects1[i].setString(gdjs.New_32sceneCode.GDlogObjects1[i].getString() + ("rect2" + gdjs.evtTools.string.newLine()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("none");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rect1"), gdjs.New_32sceneCode.GDrect1Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickStart.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrect1Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "none";
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("rect1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rect1"), gdjs.New_32sceneCode.GDrect1Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDrect1Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "rect1";
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("log"), gdjs.New_32sceneCode.GDlogObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDlogObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDlogObjects1[i].setString(gdjs.New_32sceneCode.GDlogObjects1[i].getString() + ("rect1" + gdjs.evtTools.string.newLine()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("none");
}}

}


{


{
}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDguiBtnObjects1.length = 0;
gdjs.New_32sceneCode.GDguiBtnObjects2.length = 0;
gdjs.New_32sceneCode.GDguiFaultMsgObjects1.length = 0;
gdjs.New_32sceneCode.GDguiFaultMsgObjects2.length = 0;
gdjs.New_32sceneCode.GDguiWinMsgObjects1.length = 0;
gdjs.New_32sceneCode.GDguiWinMsgObjects2.length = 0;
gdjs.New_32sceneCode.GDguiWindowObjects1.length = 0;
gdjs.New_32sceneCode.GDguiWindowObjects2.length = 0;
gdjs.New_32sceneCode.GDrect2Objects1.length = 0;
gdjs.New_32sceneCode.GDrect2Objects2.length = 0;
gdjs.New_32sceneCode.GDrect1Objects1.length = 0;
gdjs.New_32sceneCode.GDrect1Objects2.length = 0;
gdjs.New_32sceneCode.GDlogObjects1.length = 0;
gdjs.New_32sceneCode.GDlogObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
