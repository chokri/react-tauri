#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
#[tauri::command]
fn run_command(cmd: String) -> String {
  println!("Msg received {}", cmd);
  return "Hello from Rust".to_string();
}
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![run_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
