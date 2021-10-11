gdjs.GUICode = {};
gdjs.GUICode.GDguiBtnObjects1= [];
gdjs.GUICode.GDguiBtnObjects2= [];
gdjs.GUICode.GDguiFaultMsgObjects1= [];
gdjs.GUICode.GDguiFaultMsgObjects2= [];
gdjs.GUICode.GDguiWinMsgObjects1= [];
gdjs.GUICode.GDguiWinMsgObjects2= [];
gdjs.GUICode.GDguiWindowObjects1= [];
gdjs.GUICode.GDguiWindowObjects2= [];

gdjs.GUICode.conditionTrue_0 = {val:false};
gdjs.GUICode.condition0IsTrue_0 = {val:false};
gdjs.GUICode.condition1IsTrue_0 = {val:false};
gdjs.GUICode.condition2IsTrue_0 = {val:false};


gdjs.GUICode.eventsList0 = function(runtimeScene) {

{


gdjs.GUICode.condition0IsTrue_0.val = false;
{
gdjs.GUICode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GUICode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.GUICode.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.GUICode.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.GUICode.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.GUICode.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.GUICode.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GUICode.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiWindowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GUICode.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiWinMsgObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GUICode.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiFaultMsgObjects1[i].hide();
}
}{gdjs.VariablesContainer.badVariable.setString("run");
}}

}


{


gdjs.GUICode.condition0IsTrue_0.val = false;
{
gdjs.GUICode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "win";
}if (gdjs.GUICode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.GUICode.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWinMsg"), gdjs.GUICode.GDguiWinMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.GUICode.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.GUICode.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiWindowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GUICode.GDguiWinMsgObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiWinMsgObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GUICode.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiBtnObjects1[i].hide(false);
}
}}

}


{


gdjs.GUICode.condition0IsTrue_0.val = false;
{
gdjs.GUICode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "fault";
}if (gdjs.GUICode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiBtn"), gdjs.GUICode.GDguiBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.GUICode.GDguiFaultMsgObjects1);
gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.GUICode.GDguiWindowObjects1);
{for(var i = 0, len = gdjs.GUICode.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiWindowObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GUICode.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiFaultMsgObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GUICode.GDguiBtnObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiBtnObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GUICode.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiWindowObjects1[i].resetTimer("show");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guiWindow"), gdjs.GUICode.GDguiWindowObjects1);

gdjs.GUICode.condition0IsTrue_0.val = false;
gdjs.GUICode.condition1IsTrue_0.val = false;
{
gdjs.GUICode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "fault";
}if ( gdjs.GUICode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GUICode.GDguiWindowObjects1.length;i<l;++i) {
    if ( gdjs.GUICode.GDguiWindowObjects1[i].timerElapsedTime("show", 3) ) {
        gdjs.GUICode.condition1IsTrue_0.val = true;
        gdjs.GUICode.GDguiWindowObjects1[k] = gdjs.GUICode.GDguiWindowObjects1[i];
        ++k;
    }
}
gdjs.GUICode.GDguiWindowObjects1.length = k;}}
if (gdjs.GUICode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("guiFaultMsg"), gdjs.GUICode.GDguiFaultMsgObjects1);
/* Reuse gdjs.GUICode.GDguiWindowObjects1 */
{for(var i = 0, len = gdjs.GUICode.GDguiWindowObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiWindowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GUICode.GDguiFaultMsgObjects1.length ;i < len;++i) {
    gdjs.GUICode.GDguiFaultMsgObjects1[i].hide();
}
}{gdjs.VariablesContainer.badVariable.setString("run");
}}

}


};

gdjs.GUICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GUICode.GDguiBtnObjects1.length = 0;
gdjs.GUICode.GDguiBtnObjects2.length = 0;
gdjs.GUICode.GDguiFaultMsgObjects1.length = 0;
gdjs.GUICode.GDguiFaultMsgObjects2.length = 0;
gdjs.GUICode.GDguiWinMsgObjects1.length = 0;
gdjs.GUICode.GDguiWinMsgObjects2.length = 0;
gdjs.GUICode.GDguiWindowObjects1.length = 0;
gdjs.GUICode.GDguiWindowObjects2.length = 0;

gdjs.GUICode.eventsList0(runtimeScene);
return;

}

gdjs['GUICode'] = gdjs.GUICode;
