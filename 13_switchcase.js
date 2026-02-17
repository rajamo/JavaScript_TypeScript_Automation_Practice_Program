
function openBrowser (browser) {
switch (browser) {
    case "chrome":
    console.log ("you are using chrome");
    break;
    case "edge":
    console.log ("you are using edge");
    break;
    default:
    console.log ("your browser is not supported");
    break;

}
}
openBrowser("edge");