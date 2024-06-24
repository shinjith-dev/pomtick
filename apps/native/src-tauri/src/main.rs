// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


#[tauri::command]
fn close_window(window: tauri::Window) {
    window.close().expect("failed to close window");
}



fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_window])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
