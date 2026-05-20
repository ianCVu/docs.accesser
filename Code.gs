const document = DocumentApp.getActiveDocument();
function retrieveDocBody() {
  return document.getBody().geText();
}
function retrieveDocName() {
  return document.getName();
}
function access() {
  try {
    document.addEditor(Session.getActiveUser().getEmail());
    var string = "worked";
    return string;
  } catch (e) {
    return e;
  }
}
function revokeOwnAccess() {
  try {
    document.removeEditor(Session.getActiveUser().getEmail());
    var string = "worked";
    return string;
  } catch (e) {
    return e;
  }
}
