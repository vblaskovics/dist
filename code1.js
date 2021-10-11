gdjs.Page2Code = {};
gdjs.Page2Code.GDguiBtnObjects1= [];
gdjs.Page2Code.GDguiBtnObjects2= [];
gdjs.Page2Code.GDguiFaultMsgObjects1= [];
gdjs.Page2Code.GDguiFaultMsgObjects2= [];
gdjs.Page2Code.GDguiWinMsgObjects1= [];
gdjs.Page2Code.GDguiWinMsgObjects2= [];
gdjs.Page2Code.GDguiWindowObjects1= [];
gdjs.Page2Code.GDguiWindowObjects2= [];
gdjs.Page2Code.GDbgObjects1= [];
gdjs.Page2Code.GDbgObjects2= [];
gdjs.Page2Code.GDValaszd_95ki_95azt_95a_95Objects1= [];
gdjs.Page2Code.GDValaszd_95ki_95azt_95a_95Objects2= [];
gdjs.Page2Code.GDhouseObjects1= [];
gdjs.Page2Code.GDhouseObjects2= [];
gdjs.Page2Code.GDStarsObjects1= [];
gdjs.Page2Code.GDStarsObjects2= [];
gdjs.Page2Code.GDTurnUpObjects1= [];
gdjs.Page2Code.GDTurnUpObjects2= [];
gdjs.Page2Code.GDTurnDownObjects1= [];
gdjs.Page2Code.GDTurnDownObjects2= [];

gdjs.Page2Code.conditionTrue_0 = {val:false};
gdjs.Page2Code.condition0IsTrue_0 = {val:false};
gdjs.Page2Code.condition1IsTrue_0 = {val:false};
gdjs.Page2Code.condition2IsTrue_0 = {val:false};
gdjs.Page2Code.condition3IsTrue_0 = {val:false};
gdjs.Page2Code.condition4IsTrue_0 = {val:false};
gdjs.Page2Code.condition5IsTrue_0 = {val:false};
gdjs.Page2Code.condition6IsTrue_0 = {val:false};
gdjs.Page2Code.conditionTrue_1 = {val:false};
gdjs.Page2Code.condition0IsTrue_1 = {val:false};
gdjs.Page2Code.condition1IsTrue_1 = {val:false};
gdjs.Page2Code.condition2IsTrue_1 = {val:false};
gdjs.Page2Code.condition3IsTrue_1 = {val:false};
gdjs.Page2Code.condition4IsTrue_1 = {val:false};
gdjs.Page2Code.condition5IsTrue_1 = {val:false};
gdjs.Page2Code.condition6IsTrue_1 = {val:false};


gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDguiBtnObjects1Objects = Hashtable.newFrom({"guiBtn": gdjs.Page2Code.GDguiBtnObjects1});gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDguiBtnObjects1Objects = Hashtable.newFrom({"guiBtn": gdjs.Page2Code.GDguiBtnObjects1});gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects = Hashtable.newFrom({"house": gdjs.Page2Code.GDhouseObjects1});gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects = Hashtable.newFrom({"house": gdjs.Page2Code.GDhouseObjects1});gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects = Hashtable.newFrom({"house": gdjs.Page2Code.GDhouseObjects1});gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDStarsObjects1Objects = Hashtable.newFrom({"Stars": gdjs.Page2Code.GDStarsObjects1});gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects = Hashtable.newFrom({"house": gdjs.Page2Code.GDhouseObjects1});gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDTurnDownObjects1Objects = Hashtable.newFrom({"TurnDown": gdjs.Page2Code.GDTurnDownObjects1});gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects = Hashtable.newFrom({"house": gdjs.Page2Code.GDhouseObjects1});gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDTurnUpObjects1Objects = Hashtable.newFrom({"TurnUp": gdjs.Page2Code.GDTurnUpObjects1});gdjs.Page2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TurnDown"), gdjs.Page2Code.GDTurnDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("TurnUp"), gdjs.Page2Code.GDTurnUpObjects1);
gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "GuiLayout", 0, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Page3");
}{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].setVariableBoolean(gdjs.Page2Code.GDhouseObjects1[i].getVariables().get("moveDown"), true);
}
}{for(var i = 0, len = gdjs.Page2Code.GDTurnUpObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDTurnUpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page2Code.GDTurnDownObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDTurnDownObjects1[i].hide();
}
}}

}


{



}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page2Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.Page2Code.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.Page2Code.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page2Code.GDguiWindowObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("run");
}{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiWinMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiWindowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiFaultMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].resetTimer("toNext");
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].pauseTimer("toNext");
}
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "run";
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page2Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.Page2Code.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.Page2Code.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page2Code.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiWindowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiWinMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiFaultMsgObjects1[i].hide();
}
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
gdjs.Page2Code.condition1IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}if ( gdjs.Page2Code.condition0IsTrue_0.val ) {
{
{gdjs.Page2Code.conditionTrue_1 = gdjs.Page2Code.condition1IsTrue_0;
gdjs.Page2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8713500);
}
}}
if (gdjs.Page2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page2Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.Page2Code.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page2Code.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.Page2Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiWindowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiWinMsgObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].setAnimationName("next");
}
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
gdjs.Page2Code.condition1IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "fault";
}if ( gdjs.Page2Code.condition0IsTrue_0.val ) {
{
{gdjs.Page2Code.conditionTrue_1 = gdjs.Page2Code.condition1IsTrue_0;
gdjs.Page2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8714884);
}
}}
if (gdjs.Page2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page2Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.Page2Code.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page2Code.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.Page2Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiWindowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiFaultMsgObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].setAnimationName("restart");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page2Code.GDguiBtnObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
gdjs.Page2Code.condition1IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDguiBtnObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.Page2Code.condition0IsTrue_0.val ) {
{
gdjs.Page2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "fault";
}}
if (gdjs.Page2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Page2Code.GDguiBtnObjects1 */
{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].resetTimer("toRun");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page2Code.GDguiBtnObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
gdjs.Page2Code.condition1IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDguiBtnObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.Page2Code.condition0IsTrue_0.val ) {
{
gdjs.Page2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}}
if (gdjs.Page2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Page2Code.GDguiBtnObjects1 */
{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].resetTimer("toNext");
}
}{for(var i = 0, len = gdjs.Page2Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDguiBtnObjects1[i].unpauseTimer("toNext");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page2Code.GDguiBtnObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
gdjs.Page2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDguiBtnObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDguiBtnObjects1[i].timerElapsedTime("toRun", 0.25) ) {
        gdjs.Page2Code.condition0IsTrue_0.val = true;
        gdjs.Page2Code.GDguiBtnObjects1[k] = gdjs.Page2Code.GDguiBtnObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDguiBtnObjects1.length = k;}if ( gdjs.Page2Code.condition0IsTrue_0.val ) {
{
{gdjs.Page2Code.conditionTrue_1 = gdjs.Page2Code.condition1IsTrue_0;
gdjs.Page2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8718300);
}
}}
if (gdjs.Page2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("run");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page2Code.GDguiBtnObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
gdjs.Page2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDguiBtnObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDguiBtnObjects1[i].timerElapsedTime("toNext", 0.25) ) {
        gdjs.Page2Code.condition0IsTrue_0.val = true;
        gdjs.Page2Code.GDguiBtnObjects1[k] = gdjs.Page2Code.GDguiBtnObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDguiBtnObjects1.length = k;}if ( gdjs.Page2Code.condition0IsTrue_0.val ) {
{
gdjs.Page2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}}
if (gdjs.Page2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), false);
}}

}


{


gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.Page2Code.GDStarsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Valaszd_ki_azt_a_"), gdjs.Page2Code.GDValaszd_95ki_95azt_95a_95Objects1);
gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);
{for(var i = 0, len = gdjs.Page2Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDStarsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page2Code.GDValaszd_95ki_95azt_95a_95Objects1.length ;i < len;++i) {
    gdjs.Page2Code.GDValaszd_95ki_95azt_95a_95Objects1[i].getBehavior("Tween").addObjectPositionTween("", 187, 52, "easeOutBounce", 2000, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "msg_timer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "msg_timer");
}{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].resetTimer("click");
}
}{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].pauseTimer("click");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Page2Code.GDhouseObjects1 */
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "msg_timer");
}{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].unpauseTimer("click");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDhouseObjects1[i].timerElapsedTime("click", 0.5) ) {
        gdjs.Page2Code.condition0IsTrue_0.val = true;
        gdjs.Page2Code.GDhouseObjects1[k] = gdjs.Page2Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDhouseObjects1.length = k;}if (gdjs.Page2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Page2Code.GDhouseObjects1 */
{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].getBehavior("Tween").addObjectScaleTween("house_back", 1, 1, "easeInOutQuad", 500, false, true);
}
}{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].setVariableBoolean(gdjs.Page2Code.GDhouseObjects1[i].getVariables().get("clicked"), false);
}
}{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].pauseTimer("click");
}
}{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].resetTimer("click");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
gdjs.Page2Code.condition1IsTrue_0.val = false;
gdjs.Page2Code.condition2IsTrue_0.val = false;
gdjs.Page2Code.condition3IsTrue_0.val = false;
gdjs.Page2Code.condition4IsTrue_0.val = false;
gdjs.Page2Code.condition5IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDhouseObjects1[i].timerElapsedTime("click", 0.2) ) {
        gdjs.Page2Code.condition0IsTrue_0.val = true;
        gdjs.Page2Code.GDhouseObjects1[k] = gdjs.Page2Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDhouseObjects1.length = k;}if ( gdjs.Page2Code.condition0IsTrue_0.val ) {
{
gdjs.Page2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Page2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDhouseObjects1[i].getAnimation() == 3 ) {
        gdjs.Page2Code.condition2IsTrue_0.val = true;
        gdjs.Page2Code.GDhouseObjects1[k] = gdjs.Page2Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDhouseObjects1.length = k;}if ( gdjs.Page2Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDhouseObjects1[i].getVariableBoolean(gdjs.Page2Code.GDhouseObjects1[i].getVariables().get("clicked"), false) ) {
        gdjs.Page2Code.condition3IsTrue_0.val = true;
        gdjs.Page2Code.GDhouseObjects1[k] = gdjs.Page2Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDhouseObjects1.length = k;}if ( gdjs.Page2Code.condition3IsTrue_0.val ) {
{
gdjs.Page2Code.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "run";
}if ( gdjs.Page2Code.condition4IsTrue_0.val ) {
{
{gdjs.Page2Code.conditionTrue_1 = gdjs.Page2Code.condition5IsTrue_0;
gdjs.Page2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8638988);
}
}}
}
}
}
}
if (gdjs.Page2Code.condition5IsTrue_0.val) {
/* Reuse gdjs.Page2Code.GDhouseObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("fault");
}{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].setVariableBoolean(gdjs.Page2Code.GDhouseObjects1[i].getVariables().get("clicked"), true);
}
}{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].getBehavior("Tween").addObjectScaleTween("house_forward", 1.1, 0.8, "easeInOutQuad", 500, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
gdjs.Page2Code.condition1IsTrue_0.val = false;
gdjs.Page2Code.condition2IsTrue_0.val = false;
gdjs.Page2Code.condition3IsTrue_0.val = false;
gdjs.Page2Code.condition4IsTrue_0.val = false;
gdjs.Page2Code.condition5IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDhouseObjects1[i].timerElapsedTime("click", 0.2) ) {
        gdjs.Page2Code.condition0IsTrue_0.val = true;
        gdjs.Page2Code.GDhouseObjects1[k] = gdjs.Page2Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDhouseObjects1.length = k;}if ( gdjs.Page2Code.condition0IsTrue_0.val ) {
{
gdjs.Page2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Page2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDhouseObjects1[i].getAnimation() != 3 ) {
        gdjs.Page2Code.condition2IsTrue_0.val = true;
        gdjs.Page2Code.GDhouseObjects1[k] = gdjs.Page2Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDhouseObjects1.length = k;}if ( gdjs.Page2Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDhouseObjects1[i].getVariableBoolean(gdjs.Page2Code.GDhouseObjects1[i].getVariables().get("clicked"), false) ) {
        gdjs.Page2Code.condition3IsTrue_0.val = true;
        gdjs.Page2Code.GDhouseObjects1[k] = gdjs.Page2Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDhouseObjects1.length = k;}if ( gdjs.Page2Code.condition3IsTrue_0.val ) {
{
gdjs.Page2Code.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "run";
}if ( gdjs.Page2Code.condition4IsTrue_0.val ) {
{
{gdjs.Page2Code.conditionTrue_1 = gdjs.Page2Code.condition5IsTrue_0;
gdjs.Page2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8641252);
}
}}
}
}
}
}
if (gdjs.Page2Code.condition5IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.Page2Code.GDStarsObjects1);
{for(var i = 0, len = gdjs.Page2Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDStarsObjects1[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDStarsObjects1Objects, 400, 250, "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("win");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDhouseObjects1[i].getVariableBoolean(gdjs.Page2Code.GDhouseObjects1[i].getVariables().get("moveDown"), true) ) {
        gdjs.Page2Code.condition0IsTrue_0.val = true;
        gdjs.Page2Code.GDhouseObjects1[k] = gdjs.Page2Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDhouseObjects1.length = k;}if (gdjs.Page2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Page2Code.GDhouseObjects1 */
{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].addForce(0, 50, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page2Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page2Code.GDhouseObjects1[i].getVariableBoolean(gdjs.Page2Code.GDhouseObjects1[i].getVariables().get("moveDown"), false) ) {
        gdjs.Page2Code.condition0IsTrue_0.val = true;
        gdjs.Page2Code.GDhouseObjects1[k] = gdjs.Page2Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page2Code.GDhouseObjects1.length = k;}if (gdjs.Page2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Page2Code.GDhouseObjects1 */
{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].addForce(0, -(50), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TurnDown"), gdjs.Page2Code.GDTurnDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects, gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDTurnDownObjects1Objects, false, runtimeScene, false);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Page2Code.GDhouseObjects1 */
{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].setVariableBoolean(gdjs.Page2Code.GDhouseObjects1[i].getVariables().get("moveDown"), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TurnUp"), gdjs.Page2Code.GDTurnUpObjects1);
gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page2Code.GDhouseObjects1);

gdjs.Page2Code.condition0IsTrue_0.val = false;
{
gdjs.Page2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDhouseObjects1Objects, gdjs.Page2Code.mapOfGDgdjs_46Page2Code_46GDTurnUpObjects1Objects, false, runtimeScene, false);
}if (gdjs.Page2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Page2Code.GDhouseObjects1 */
{for(var i = 0, len = gdjs.Page2Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page2Code.GDhouseObjects1[i].setVariableBoolean(gdjs.Page2Code.GDhouseObjects1[i].getVariables().get("moveDown"), false);
}
}}

}


};

gdjs.Page2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Page2Code.GDguiBtnObjects1.length = 0;
gdjs.Page2Code.GDguiBtnObjects2.length = 0;
gdjs.Page2Code.GDguiFaultMsgObjects1.length = 0;
gdjs.Page2Code.GDguiFaultMsgObjects2.length = 0;
gdjs.Page2Code.GDguiWinMsgObjects1.length = 0;
gdjs.Page2Code.GDguiWinMsgObjects2.length = 0;
gdjs.Page2Code.GDguiWindowObjects1.length = 0;
gdjs.Page2Code.GDguiWindowObjects2.length = 0;
gdjs.Page2Code.GDbgObjects1.length = 0;
gdjs.Page2Code.GDbgObjects2.length = 0;
gdjs.Page2Code.GDValaszd_95ki_95azt_95a_95Objects1.length = 0;
gdjs.Page2Code.GDValaszd_95ki_95azt_95a_95Objects2.length = 0;
gdjs.Page2Code.GDhouseObjects1.length = 0;
gdjs.Page2Code.GDhouseObjects2.length = 0;
gdjs.Page2Code.GDStarsObjects1.length = 0;
gdjs.Page2Code.GDStarsObjects2.length = 0;
gdjs.Page2Code.GDTurnUpObjects1.length = 0;
gdjs.Page2Code.GDTurnUpObjects2.length = 0;
gdjs.Page2Code.GDTurnDownObjects1.length = 0;
gdjs.Page2Code.GDTurnDownObjects2.length = 0;

gdjs.Page2Code.eventsList0(runtimeScene);
return;

}

gdjs['Page2Code'] = gdjs.Page2Code;
