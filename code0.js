gdjs.Page1Code = {};
gdjs.Page1Code.GDguiBtnObjects1= [];
gdjs.Page1Code.GDguiBtnObjects2= [];
gdjs.Page1Code.GDguiFaultMsgObjects1= [];
gdjs.Page1Code.GDguiFaultMsgObjects2= [];
gdjs.Page1Code.GDguiWinMsgObjects1= [];
gdjs.Page1Code.GDguiWinMsgObjects2= [];
gdjs.Page1Code.GDguiWindowObjects1= [];
gdjs.Page1Code.GDguiWindowObjects2= [];
gdjs.Page1Code.GDbgObjects1= [];
gdjs.Page1Code.GDbgObjects2= [];
gdjs.Page1Code.GDValaszd_95ki_95azt_95a_95Objects1= [];
gdjs.Page1Code.GDValaszd_95ki_95azt_95a_95Objects2= [];
gdjs.Page1Code.GDhouseObjects1= [];
gdjs.Page1Code.GDhouseObjects2= [];
gdjs.Page1Code.GDStarsObjects1= [];
gdjs.Page1Code.GDStarsObjects2= [];

gdjs.Page1Code.conditionTrue_0 = {val:false};
gdjs.Page1Code.condition0IsTrue_0 = {val:false};
gdjs.Page1Code.condition1IsTrue_0 = {val:false};
gdjs.Page1Code.condition2IsTrue_0 = {val:false};
gdjs.Page1Code.condition3IsTrue_0 = {val:false};
gdjs.Page1Code.condition4IsTrue_0 = {val:false};
gdjs.Page1Code.condition5IsTrue_0 = {val:false};
gdjs.Page1Code.condition6IsTrue_0 = {val:false};
gdjs.Page1Code.conditionTrue_1 = {val:false};
gdjs.Page1Code.condition0IsTrue_1 = {val:false};
gdjs.Page1Code.condition1IsTrue_1 = {val:false};
gdjs.Page1Code.condition2IsTrue_1 = {val:false};
gdjs.Page1Code.condition3IsTrue_1 = {val:false};
gdjs.Page1Code.condition4IsTrue_1 = {val:false};
gdjs.Page1Code.condition5IsTrue_1 = {val:false};
gdjs.Page1Code.condition6IsTrue_1 = {val:false};


gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDguiBtnObjects1Objects = Hashtable.newFrom({"guiBtn": gdjs.Page1Code.GDguiBtnObjects1});gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDguiBtnObjects1Objects = Hashtable.newFrom({"guiBtn": gdjs.Page1Code.GDguiBtnObjects1});gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDhouseObjects1Objects = Hashtable.newFrom({"house": gdjs.Page1Code.GDhouseObjects1});gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDhouseObjects1Objects = Hashtable.newFrom({"house": gdjs.Page1Code.GDhouseObjects1});gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDhouseObjects1Objects = Hashtable.newFrom({"house": gdjs.Page1Code.GDhouseObjects1});gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDStarsObjects1Objects = Hashtable.newFrom({"Stars": gdjs.Page1Code.GDStarsObjects1});gdjs.Page1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "GuiLayout", 0, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Page2");
}}

}


{



}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page1Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.Page1Code.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.Page1Code.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page1Code.GDguiWindowObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("run");
}{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiWinMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiWindowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiFaultMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].resetTimer("toNext");
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].pauseTimer("toNext");
}
}}

}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "run";
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page1Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.Page1Code.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.Page1Code.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page1Code.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiWindowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiWinMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiFaultMsgObjects1[i].hide();
}
}}

}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
{gdjs.Page1Code.conditionTrue_1 = gdjs.Page1Code.condition1IsTrue_0;
gdjs.Page1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8713500);
}
}}
if (gdjs.Page1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page1Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.Page1Code.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page1Code.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.Page1Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiWindowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiWinMsgObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].setAnimationName("next");
}
}}

}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "fault";
}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
{gdjs.Page1Code.conditionTrue_1 = gdjs.Page1Code.condition1IsTrue_0;
gdjs.Page1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8714884);
}
}}
if (gdjs.Page1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page1Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.Page1Code.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page1Code.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.Page1Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiWindowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiFaultMsgObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].setAnimationName("restart");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page1Code.GDguiBtnObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDguiBtnObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
gdjs.Page1Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "fault";
}}
if (gdjs.Page1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Page1Code.GDguiBtnObjects1 */
{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].resetTimer("toRun");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page1Code.GDguiBtnObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDguiBtnObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
gdjs.Page1Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}}
if (gdjs.Page1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Page1Code.GDguiBtnObjects1 */
{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].resetTimer("toNext");
}
}{for(var i = 0, len = gdjs.Page1Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDguiBtnObjects1[i].unpauseTimer("toNext");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page1Code.GDguiBtnObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page1Code.GDguiBtnObjects1.length;i<l;++i) {
    if ( gdjs.Page1Code.GDguiBtnObjects1[i].timerElapsedTime("toRun", 0.25) ) {
        gdjs.Page1Code.condition0IsTrue_0.val = true;
        gdjs.Page1Code.GDguiBtnObjects1[k] = gdjs.Page1Code.GDguiBtnObjects1[i];
        ++k;
    }
}
gdjs.Page1Code.GDguiBtnObjects1.length = k;}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
{gdjs.Page1Code.conditionTrue_1 = gdjs.Page1Code.condition1IsTrue_0;
gdjs.Page1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8718300);
}
}}
if (gdjs.Page1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("run");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page1Code.GDguiBtnObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page1Code.GDguiBtnObjects1.length;i<l;++i) {
    if ( gdjs.Page1Code.GDguiBtnObjects1[i].timerElapsedTime("toNext", 0.25) ) {
        gdjs.Page1Code.condition0IsTrue_0.val = true;
        gdjs.Page1Code.GDguiBtnObjects1[k] = gdjs.Page1Code.GDguiBtnObjects1[i];
        ++k;
    }
}
gdjs.Page1Code.GDguiBtnObjects1.length = k;}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
gdjs.Page1Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}}
if (gdjs.Page1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), false);
}}

}


{


gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.Page1Code.GDStarsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Valaszd_ki_azt_a_"), gdjs.Page1Code.GDValaszd_95ki_95azt_95a_95Objects1);
gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page1Code.GDhouseObjects1);
{for(var i = 0, len = gdjs.Page1Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDStarsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page1Code.GDValaszd_95ki_95azt_95a_95Objects1.length ;i < len;++i) {
    gdjs.Page1Code.GDValaszd_95ki_95azt_95a_95Objects1[i].getBehavior("Tween").addObjectPositionTween("", 20, 52, "easeOutBounce", 2000, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "msg_timer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "msg_timer");
}{for(var i = 0, len = gdjs.Page1Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDhouseObjects1[i].resetTimer("click");
}
}{for(var i = 0, len = gdjs.Page1Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDhouseObjects1[i].pauseTimer("click");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page1Code.GDhouseObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDhouseObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.Page1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Page1Code.GDhouseObjects1 */
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "msg_timer");
}{for(var i = 0, len = gdjs.Page1Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDhouseObjects1[i].unpauseTimer("click");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page1Code.GDhouseObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page1Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page1Code.GDhouseObjects1[i].timerElapsedTime("click", 0.5) ) {
        gdjs.Page1Code.condition0IsTrue_0.val = true;
        gdjs.Page1Code.GDhouseObjects1[k] = gdjs.Page1Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page1Code.GDhouseObjects1.length = k;}if (gdjs.Page1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Page1Code.GDhouseObjects1 */
{for(var i = 0, len = gdjs.Page1Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDhouseObjects1[i].getBehavior("Tween").addObjectScaleTween("house_back", 1, 1, "easeInOutQuad", 500, false, true);
}
}{for(var i = 0, len = gdjs.Page1Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDhouseObjects1[i].setVariableBoolean(gdjs.Page1Code.GDhouseObjects1[i].getVariables().get("clicked"), false);
}
}{for(var i = 0, len = gdjs.Page1Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDhouseObjects1[i].pauseTimer("click");
}
}{for(var i = 0, len = gdjs.Page1Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDhouseObjects1[i].resetTimer("click");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page1Code.GDhouseObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
gdjs.Page1Code.condition2IsTrue_0.val = false;
gdjs.Page1Code.condition3IsTrue_0.val = false;
gdjs.Page1Code.condition4IsTrue_0.val = false;
gdjs.Page1Code.condition5IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page1Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page1Code.GDhouseObjects1[i].timerElapsedTime("click", 0.2) ) {
        gdjs.Page1Code.condition0IsTrue_0.val = true;
        gdjs.Page1Code.GDhouseObjects1[k] = gdjs.Page1Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page1Code.GDhouseObjects1.length = k;}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
gdjs.Page1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDhouseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Page1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Page1Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page1Code.GDhouseObjects1[i].getAnimation() == 0 ) {
        gdjs.Page1Code.condition2IsTrue_0.val = true;
        gdjs.Page1Code.GDhouseObjects1[k] = gdjs.Page1Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page1Code.GDhouseObjects1.length = k;}if ( gdjs.Page1Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Page1Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page1Code.GDhouseObjects1[i].getVariableBoolean(gdjs.Page1Code.GDhouseObjects1[i].getVariables().get("clicked"), false) ) {
        gdjs.Page1Code.condition3IsTrue_0.val = true;
        gdjs.Page1Code.GDhouseObjects1[k] = gdjs.Page1Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page1Code.GDhouseObjects1.length = k;}if ( gdjs.Page1Code.condition3IsTrue_0.val ) {
{
gdjs.Page1Code.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "run";
}if ( gdjs.Page1Code.condition4IsTrue_0.val ) {
{
{gdjs.Page1Code.conditionTrue_1 = gdjs.Page1Code.condition5IsTrue_0;
gdjs.Page1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8621300);
}
}}
}
}
}
}
if (gdjs.Page1Code.condition5IsTrue_0.val) {
/* Reuse gdjs.Page1Code.GDhouseObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("fault");
}{for(var i = 0, len = gdjs.Page1Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDhouseObjects1[i].setVariableBoolean(gdjs.Page1Code.GDhouseObjects1[i].getVariables().get("clicked"), true);
}
}{for(var i = 0, len = gdjs.Page1Code.GDhouseObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDhouseObjects1[i].getBehavior("Tween").addObjectScaleTween("house_forward", 1.1, 0.8, "easeInOutQuad", 500, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.Page1Code.GDhouseObjects1);

gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
gdjs.Page1Code.condition2IsTrue_0.val = false;
gdjs.Page1Code.condition3IsTrue_0.val = false;
gdjs.Page1Code.condition4IsTrue_0.val = false;
gdjs.Page1Code.condition5IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page1Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page1Code.GDhouseObjects1[i].timerElapsedTime("click", 0.2) ) {
        gdjs.Page1Code.condition0IsTrue_0.val = true;
        gdjs.Page1Code.GDhouseObjects1[k] = gdjs.Page1Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page1Code.GDhouseObjects1.length = k;}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
gdjs.Page1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDhouseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Page1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Page1Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page1Code.GDhouseObjects1[i].getAnimation() != 0 ) {
        gdjs.Page1Code.condition2IsTrue_0.val = true;
        gdjs.Page1Code.GDhouseObjects1[k] = gdjs.Page1Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page1Code.GDhouseObjects1.length = k;}if ( gdjs.Page1Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Page1Code.GDhouseObjects1.length;i<l;++i) {
    if ( gdjs.Page1Code.GDhouseObjects1[i].getVariableBoolean(gdjs.Page1Code.GDhouseObjects1[i].getVariables().get("clicked"), false) ) {
        gdjs.Page1Code.condition3IsTrue_0.val = true;
        gdjs.Page1Code.GDhouseObjects1[k] = gdjs.Page1Code.GDhouseObjects1[i];
        ++k;
    }
}
gdjs.Page1Code.GDhouseObjects1.length = k;}if ( gdjs.Page1Code.condition3IsTrue_0.val ) {
{
gdjs.Page1Code.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "run";
}if ( gdjs.Page1Code.condition4IsTrue_0.val ) {
{
{gdjs.Page1Code.conditionTrue_1 = gdjs.Page1Code.condition5IsTrue_0;
gdjs.Page1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8623564);
}
}}
}
}
}
}
if (gdjs.Page1Code.condition5IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.Page1Code.GDStarsObjects1);
{for(var i = 0, len = gdjs.Page1Code.GDStarsObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDStarsObjects1[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDStarsObjects1Objects, 400, 250, "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("win");
}}

}


};

gdjs.Page1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Page1Code.GDguiBtnObjects1.length = 0;
gdjs.Page1Code.GDguiBtnObjects2.length = 0;
gdjs.Page1Code.GDguiFaultMsgObjects1.length = 0;
gdjs.Page1Code.GDguiFaultMsgObjects2.length = 0;
gdjs.Page1Code.GDguiWinMsgObjects1.length = 0;
gdjs.Page1Code.GDguiWinMsgObjects2.length = 0;
gdjs.Page1Code.GDguiWindowObjects1.length = 0;
gdjs.Page1Code.GDguiWindowObjects2.length = 0;
gdjs.Page1Code.GDbgObjects1.length = 0;
gdjs.Page1Code.GDbgObjects2.length = 0;
gdjs.Page1Code.GDValaszd_95ki_95azt_95a_95Objects1.length = 0;
gdjs.Page1Code.GDValaszd_95ki_95azt_95a_95Objects2.length = 0;
gdjs.Page1Code.GDhouseObjects1.length = 0;
gdjs.Page1Code.GDhouseObjects2.length = 0;
gdjs.Page1Code.GDStarsObjects1.length = 0;
gdjs.Page1Code.GDStarsObjects2.length = 0;

gdjs.Page1Code.eventsList0(runtimeScene);
return;

}

gdjs['Page1Code'] = gdjs.Page1Code;
