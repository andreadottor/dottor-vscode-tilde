// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerTextEditorCommand('dottor.tilde.insert', function (editor, edit, args) {
        let text = "~";
        edit.replace(editor.selection, text);
    }));

	context.subscriptions.push(vscode.commands.registerTextEditorCommand('dottor.backtick.insert', function (editor, edit, args) {
        let text = "`";
        edit.replace(editor.selection, text);
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {}
