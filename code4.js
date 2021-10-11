gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDguiBtnObjects1= [];
gdjs.New_32scene2Code.GDguiBtnObjects2= [];
gdjs.New_32scene2Code.GDguiFaultMsgObjects1= [];
gdjs.New_32scene2Code.GDguiFaultMsgObjects2= [];
gdjs.New_32scene2Code.GDguiWinMsgObjects1= [];
gdjs.New_32scene2Code.GDguiWinMsgObjects2= [];
gdjs.New_32scene2Code.GDguiWindowObjects1= [];
gdjs.New_32scene2Code.GDguiWindowObjects2= [];
gdjs.New_32scene2Code.GDrect2Objects1= [];
gdjs.New_32scene2Code.GDrect2Objects2= [];
gdjs.New_32scene2Code.GDrect1Objects1= [];
gdjs.New_32scene2Code.GDrect1Objects2= [];
gdjs.New_32scene2Code.GDlogObjects1= [];
gdjs.New_32scene2Code.GDlogObjects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDrect1Objects1Objects = Hashtable.newFrom({"rect1": gdjs.New_32scene2Code.GDrect1Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDrect1Objects1Objects = Hashtable.newFrom({"rect1": gdjs.New_32scene2Code.GDrect1Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDrect2Objects1Objects = Hashtable.newFrom({"rect2": gdjs.New_32scene2Code.GDrect2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDrect2Objects1Objects = Hashtable.newFrom({"rect2": gdjs.New_32scene2Code.GDrect2Objects1});gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("rect1"), gdjs.New_32scene2Code.GDrect1Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickStart.func(runtimeScene, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDrect1Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "none";
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("rect1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rect1"), gdjs.New_32scene2Code.GDrect1Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDrect1Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "rect1";
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("log"), gdjs.New_32scene2Code.GDlogObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDlogObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDlogObjects1[i].setString(gdjs.New_32scene2Code.GDlogObjects1[i].getString() + ("rect1" + gdjs.evtTools.string.newLine()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("none");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rect2"), gdjs.New_32scene2Code.GDrect2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickStart.func(runtimeScene, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDrect2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "none";
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("rect2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rect2"), gdjs.New_32scene2Code.GDrect2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDrect2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "rect2";
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("log"), gdjs.New_32scene2Code.GDlogObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDlogObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDlogObjects1[i].setString(gdjs.New_32scene2Code.GDlogObjects1[i].getString() + ("rect2" + gdjs.evtTools.string.newLine()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("none");
}}

}


{


{
}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDguiBtnObjects1.length = 0;
gdjs.New_32scene2Code.GDguiBtnObjects2.length = 0;
gdjs.New_32scene2Code.GDguiFaultMsgObjects1.length = 0;
gdjs.New_32scene2Code.GDguiFaultMsgObjects2.length = 0;
gdjs.New_32scene2Code.GDguiWinMsgObjects1.length = 0;
gdjs.New_32scene2Code.GDguiWinMsgObjects2.length = 0;
gdjs.New_32scene2Code.GDguiWindowObjects1.length = 0;
gdjs.New_32scene2Code.GDguiWindowObjects2.length = 0;
gdjs.New_32scene2Code.GDrect2Objects1.length = 0;
gdjs.New_32scene2Code.GDrect2Objects2.length = 0;
gdjs.New_32scene2Code.GDrect1Objects1.length = 0;
gdjs.New_32scene2Code.GDrect1Objects2.length = 0;
gdjs.New_32scene2Code.GDlogObjects1.length = 0;
gdjs.New_32scene2Code.GDlogObjects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
