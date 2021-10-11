gdjs.Page3Code = {};
gdjs.Page3Code.GDguiBtnObjects1= [];
gdjs.Page3Code.GDguiBtnObjects2= [];
gdjs.Page3Code.GDguiFaultMsgObjects1= [];
gdjs.Page3Code.GDguiFaultMsgObjects2= [];
gdjs.Page3Code.GDguiWinMsgObjects1= [];
gdjs.Page3Code.GDguiWinMsgObjects2= [];
gdjs.Page3Code.GDguiWindowObjects1= [];
gdjs.Page3Code.GDguiWindowObjects2= [];
gdjs.Page3Code.GDGrassAndSandObjects1= [];
gdjs.Page3Code.GDGrassAndSandObjects2= [];
gdjs.Page3Code.GDgrass1Objects1= [];
gdjs.Page3Code.GDgrass1Objects2= [];
gdjs.Page3Code.GDtileGrass_95roadNorth2Objects1= [];
gdjs.Page3Code.GDtileGrass_95roadNorth2Objects2= [];
gdjs.Page3Code.GDtileGrass_95roadNorthObjects1= [];
gdjs.Page3Code.GDtileGrass_95roadNorthObjects2= [];
gdjs.Page3Code.GDtileGrass_95roadCornerLRObjects1= [];
gdjs.Page3Code.GDtileGrass_95roadCornerLRObjects2= [];
gdjs.Page3Code.GDtileGrass_95roadCornerLLObjects1= [];
gdjs.Page3Code.GDtileGrass_95roadCornerLLObjects2= [];
gdjs.Page3Code.GDtileGrass_95roadEastObjects1= [];
gdjs.Page3Code.GDtileGrass_95roadEastObjects2= [];
gdjs.Page3Code.GDtileGrass_95roadCornerURObjects1= [];
gdjs.Page3Code.GDtileGrass_95roadCornerURObjects2= [];
gdjs.Page3Code.GDtileGrass_95roadCornerULObjects1= [];
gdjs.Page3Code.GDtileGrass_95roadCornerULObjects2= [];
gdjs.Page3Code.GDracing_95car1Objects1= [];
gdjs.Page3Code.GDracing_95car1Objects2= [];
gdjs.Page3Code.GDgrass_95miscsObjects1= [];
gdjs.Page3Code.GDgrass_95miscsObjects2= [];
gdjs.Page3Code.GDtitleObjects1= [];
gdjs.Page3Code.GDtitleObjects2= [];
gdjs.Page3Code.GDbrushObjects1= [];
gdjs.Page3Code.GDbrushObjects2= [];
gdjs.Page3Code.GDobstacleObjects1= [];
gdjs.Page3Code.GDobstacleObjects2= [];
gdjs.Page3Code.GDSikerultObjects1= [];
gdjs.Page3Code.GDSikerultObjects2= [];
gdjs.Page3Code.GDProbald_95ujraObjects1= [];
gdjs.Page3Code.GDProbald_95ujraObjects2= [];
gdjs.Page3Code.GDStarsObjects1= [];
gdjs.Page3Code.GDStarsObjects2= [];
gdjs.Page3Code.GDArrowObjects1= [];
gdjs.Page3Code.GDArrowObjects2= [];
gdjs.Page3Code.GDcursorObjects1= [];
gdjs.Page3Code.GDcursorObjects2= [];

gdjs.Page3Code.conditionTrue_0 = {val:false};
gdjs.Page3Code.condition0IsTrue_0 = {val:false};
gdjs.Page3Code.condition1IsTrue_0 = {val:false};
gdjs.Page3Code.condition2IsTrue_0 = {val:false};
gdjs.Page3Code.condition3IsTrue_0 = {val:false};
gdjs.Page3Code.conditionTrue_1 = {val:false};
gdjs.Page3Code.condition0IsTrue_1 = {val:false};
gdjs.Page3Code.condition1IsTrue_1 = {val:false};
gdjs.Page3Code.condition2IsTrue_1 = {val:false};
gdjs.Page3Code.condition3IsTrue_1 = {val:false};


gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDguiBtnObjects1Objects = Hashtable.newFrom({"guiBtn": gdjs.Page3Code.GDguiBtnObjects1});gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDguiBtnObjects1Objects = Hashtable.newFrom({"guiBtn": gdjs.Page3Code.GDguiBtnObjects1});gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDracing_9595car1Objects1Objects = Hashtable.newFrom({"racing_car1": gdjs.Page3Code.GDracing_95car1Objects1});gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.Page3Code.GDcursorObjects1});gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDobstacleObjects1Objects = Hashtable.newFrom({"obstacle": gdjs.Page3Code.GDobstacleObjects1});gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDcursorObjects1Objects = Hashtable.newFrom({"cursor": gdjs.Page3Code.GDcursorObjects1});gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDtileGrass_9595roadNorth2Objects1Objects = Hashtable.newFrom({"tileGrass_roadNorth2": gdjs.Page3Code.GDtileGrass_95roadNorth2Objects1});gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDStarsObjects1Objects = Hashtable.newFrom({"Stars": gdjs.Page3Code.GDStarsObjects1});gdjs.Page3Code.eventsList0 = function(runtimeScene) {

{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "GuiLayout", 0, 0);
}}

}


{



}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page3Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.Page3Code.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.Page3Code.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page3Code.GDguiWindowObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("run");
}{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiWinMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiWindowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiFaultMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].resetTimer("toNext");
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].pauseTimer("toNext");
}
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "run";
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page3Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.Page3Code.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.Page3Code.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page3Code.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiWindowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiWinMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiFaultMsgObjects1[i].hide();
}
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
gdjs.Page3Code.condition1IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}if ( gdjs.Page3Code.condition0IsTrue_0.val ) {
{
{gdjs.Page3Code.conditionTrue_1 = gdjs.Page3Code.condition1IsTrue_0;
gdjs.Page3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8713500);
}
}}
if (gdjs.Page3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page3Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.Page3Code.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page3Code.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.Page3Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiWindowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiWinMsgObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].setAnimationName("next");
}
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
gdjs.Page3Code.condition1IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "fault";
}if ( gdjs.Page3Code.condition0IsTrue_0.val ) {
{
{gdjs.Page3Code.conditionTrue_1 = gdjs.Page3Code.condition1IsTrue_0;
gdjs.Page3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8714884);
}
}}
if (gdjs.Page3Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page3Code.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.Page3Code.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.Page3Code.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.Page3Code.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiWindowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiFaultMsgObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].setAnimationName("restart");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page3Code.GDguiBtnObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
gdjs.Page3Code.condition1IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDguiBtnObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.Page3Code.condition0IsTrue_0.val ) {
{
gdjs.Page3Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "fault";
}}
if (gdjs.Page3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Page3Code.GDguiBtnObjects1 */
{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].resetTimer("toRun");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page3Code.GDguiBtnObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
gdjs.Page3Code.condition1IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtsExt__ClickUtils__ClickEnd.func(runtimeScene, gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDguiBtnObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.Page3Code.condition0IsTrue_0.val ) {
{
gdjs.Page3Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}}
if (gdjs.Page3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Page3Code.GDguiBtnObjects1 */
{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].resetTimer("toNext");
}
}{for(var i = 0, len = gdjs.Page3Code.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDguiBtnObjects1[i].unpauseTimer("toNext");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page3Code.GDguiBtnObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
gdjs.Page3Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page3Code.GDguiBtnObjects1.length;i<l;++i) {
    if ( gdjs.Page3Code.GDguiBtnObjects1[i].timerElapsedTime("toRun", 0.25) ) {
        gdjs.Page3Code.condition0IsTrue_0.val = true;
        gdjs.Page3Code.GDguiBtnObjects1[k] = gdjs.Page3Code.GDguiBtnObjects1[i];
        ++k;
    }
}
gdjs.Page3Code.GDguiBtnObjects1.length = k;}if ( gdjs.Page3Code.condition0IsTrue_0.val ) {
{
{gdjs.Page3Code.conditionTrue_1 = gdjs.Page3Code.condition1IsTrue_0;
gdjs.Page3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8718300);
}
}}
if (gdjs.Page3Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("run");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.Page3Code.GDguiBtnObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
gdjs.Page3Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page3Code.GDguiBtnObjects1.length;i<l;++i) {
    if ( gdjs.Page3Code.GDguiBtnObjects1[i].timerElapsedTime("toNext", 0.25) ) {
        gdjs.Page3Code.condition0IsTrue_0.val = true;
        gdjs.Page3Code.GDguiBtnObjects1[k] = gdjs.Page3Code.GDguiBtnObjects1[i];
        ++k;
    }
}
gdjs.Page3Code.GDguiBtnObjects1.length = k;}if ( gdjs.Page3Code.condition0IsTrue_0.val ) {
{
gdjs.Page3Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}}
if (gdjs.Page3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), false);
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("brush"), gdjs.Page3Code.GDbrushObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Page3Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("obstacle"), gdjs.Page3Code.GDobstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.Page3Code.GDtitleObjects1);
{for(var i = 0, len = gdjs.Page3Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page3Code.GDobstacleObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDobstacleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Page3Code.GDtitleObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDtitleObjects1[i].getBehavior("Tween").addObjectPositionTween("", 20, 9, "easeOutBounce", 2000, false);
}
}{for(var i = 0, len = gdjs.Page3Code.GDbrushObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDbrushObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("racing_car1"), gdjs.Page3Code.GDracing_95car1Objects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
gdjs.Page3Code.condition1IsTrue_0.val = false;
gdjs.Page3Code.condition2IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Page3Code.condition0IsTrue_0.val ) {
{
gdjs.Page3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDracing_9595car1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Page3Code.condition1IsTrue_0.val ) {
{
{gdjs.Page3Code.conditionTrue_1 = gdjs.Page3Code.condition2IsTrue_0;
gdjs.Page3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8654924);
}
}}
}
if (gdjs.Page3Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("brush"), gdjs.Page3Code.GDbrushObjects1);
{for(var i = 0, len = gdjs.Page3Code.GDbrushObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDbrushObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Page3Code.GDbrushObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDbrushObjects1[i].recreateParticleSystem();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("run");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("brush"), gdjs.Page3Code.GDbrushObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page3Code.GDbrushObjects1.length;i<l;++i) {
    if ( gdjs.Page3Code.GDbrushObjects1[i].isVisible() ) {
        gdjs.Page3Code.condition0IsTrue_0.val = true;
        gdjs.Page3Code.GDbrushObjects1[k] = gdjs.Page3Code.GDbrushObjects1[i];
        ++k;
    }
}
gdjs.Page3Code.GDbrushObjects1.length = k;}if (gdjs.Page3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Page3Code.GDbrushObjects1 */
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Page3Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Page3Code.GDbrushObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDbrushObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Page3Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{


gdjs.Page3Code.condition0IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Page3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("brush"), gdjs.Page3Code.GDbrushObjects1);
{for(var i = 0, len = gdjs.Page3Code.GDbrushObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDbrushObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("brush"), gdjs.Page3Code.GDbrushObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Page3Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("obstacle"), gdjs.Page3Code.GDobstacleObjects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
gdjs.Page3Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Page3Code.GDbrushObjects1.length;i<l;++i) {
    if ( gdjs.Page3Code.GDbrushObjects1[i].isVisible() ) {
        gdjs.Page3Code.condition0IsTrue_0.val = true;
        gdjs.Page3Code.GDbrushObjects1[k] = gdjs.Page3Code.GDbrushObjects1[i];
        ++k;
    }
}
gdjs.Page3Code.GDbrushObjects1.length = k;}if ( gdjs.Page3Code.condition0IsTrue_0.val ) {
{
gdjs.Page3Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDcursorObjects1Objects, gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDobstacleObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.Page3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Page3Code.GDbrushObjects1 */
{for(var i = 0, len = gdjs.Page3Code.GDbrushObjects1.length ;i < len;++i) {
    gdjs.Page3Code.GDbrushObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("fault");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("fault");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Page3Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("tileGrass_roadNorth2"), gdjs.Page3Code.GDtileGrass_95roadNorth2Objects1);

gdjs.Page3Code.condition0IsTrue_0.val = false;
gdjs.Page3Code.condition1IsTrue_0.val = false;
{
gdjs.Page3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDcursorObjects1Objects, gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDtileGrass_9595roadNorth2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Page3Code.condition0IsTrue_0.val ) {
{
{gdjs.Page3Code.conditionTrue_1 = gdjs.Page3Code.condition1IsTrue_0;
gdjs.Page3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8659036);
}
}}
if (gdjs.Page3Code.condition1IsTrue_0.val) {
gdjs.Page3Code.GDStarsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Page3Code.mapOfGDgdjs_46Page3Code_46GDStarsObjects1Objects, 400, 250, "Front");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("win");
}}

}


};

gdjs.Page3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Page3Code.GDguiBtnObjects1.length = 0;
gdjs.Page3Code.GDguiBtnObjects2.length = 0;
gdjs.Page3Code.GDguiFaultMsgObjects1.length = 0;
gdjs.Page3Code.GDguiFaultMsgObjects2.length = 0;
gdjs.Page3Code.GDguiWinMsgObjects1.length = 0;
gdjs.Page3Code.GDguiWinMsgObjects2.length = 0;
gdjs.Page3Code.GDguiWindowObjects1.length = 0;
gdjs.Page3Code.GDguiWindowObjects2.length = 0;
gdjs.Page3Code.GDGrassAndSandObjects1.length = 0;
gdjs.Page3Code.GDGrassAndSandObjects2.length = 0;
gdjs.Page3Code.GDgrass1Objects1.length = 0;
gdjs.Page3Code.GDgrass1Objects2.length = 0;
gdjs.Page3Code.GDtileGrass_95roadNorth2Objects1.length = 0;
gdjs.Page3Code.GDtileGrass_95roadNorth2Objects2.length = 0;
gdjs.Page3Code.GDtileGrass_95roadNorthObjects1.length = 0;
gdjs.Page3Code.GDtileGrass_95roadNorthObjects2.length = 0;
gdjs.Page3Code.GDtileGrass_95roadCornerLRObjects1.length = 0;
gdjs.Page3Code.GDtileGrass_95roadCornerLRObjects2.length = 0;
gdjs.Page3Code.GDtileGrass_95roadCornerLLObjects1.length = 0;
gdjs.Page3Code.GDtileGrass_95roadCornerLLObjects2.length = 0;
gdjs.Page3Code.GDtileGrass_95roadEastObjects1.length = 0;
gdjs.Page3Code.GDtileGrass_95roadEastObjects2.length = 0;
gdjs.Page3Code.GDtileGrass_95roadCornerURObjects1.length = 0;
gdjs.Page3Code.GDtileGrass_95roadCornerURObjects2.length = 0;
gdjs.Page3Code.GDtileGrass_95roadCornerULObjects1.length = 0;
gdjs.Page3Code.GDtileGrass_95roadCornerULObjects2.length = 0;
gdjs.Page3Code.GDracing_95car1Objects1.length = 0;
gdjs.Page3Code.GDracing_95car1Objects2.length = 0;
gdjs.Page3Code.GDgrass_95miscsObjects1.length = 0;
gdjs.Page3Code.GDgrass_95miscsObjects2.length = 0;
gdjs.Page3Code.GDtitleObjects1.length = 0;
gdjs.Page3Code.GDtitleObjects2.length = 0;
gdjs.Page3Code.GDbrushObjects1.length = 0;
gdjs.Page3Code.GDbrushObjects2.length = 0;
gdjs.Page3Code.GDobstacleObjects1.length = 0;
gdjs.Page3Code.GDobstacleObjects2.length = 0;
gdjs.Page3Code.GDSikerultObjects1.length = 0;
gdjs.Page3Code.GDSikerultObjects2.length = 0;
gdjs.Page3Code.GDProbald_95ujraObjects1.length = 0;
gdjs.Page3Code.GDProbald_95ujraObjects2.length = 0;
gdjs.Page3Code.GDStarsObjects1.length = 0;
gdjs.Page3Code.GDStarsObjects2.length = 0;
gdjs.Page3Code.GDArrowObjects1.length = 0;
gdjs.Page3Code.GDArrowObjects2.length = 0;
gdjs.Page3Code.GDcursorObjects1.length = 0;
gdjs.Page3Code.GDcursorObjects2.length = 0;

gdjs.Page3Code.eventsList0(runtimeScene);
return;

}

gdjs['Page3Code'] = gdjs.Page3Code;
