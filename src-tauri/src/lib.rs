use serde::{Deserialize, Serialize};
use specta_typescript::Typescript;
use tauri::{path::BaseDirectory, Manager};
use tauri_specta::{collect_commands, Builder};

#[derive(Serialize, Deserialize, specta::Type)]
pub struct Recipe {
  pub id: String,
  pub name: String,
  pub description: String,
  pub icon: String,
  pub tags: Vec<String>,
  pub bias: Option<f64>,
}

#[tauri::command]
#[specta::specta]
fn list_recipes(app_handle: tauri::AppHandle) -> Result<Vec<Recipe>, String> {
  let resource_dir = app_handle.path().resolve("recipes/", BaseDirectory::Resource).map_err(|e| e.to_string())?;
  log::info!("Resource directory: {:?}", resource_dir);
  let files = std::fs::read_dir(resource_dir).map_err(|e| e.to_string())?;
  for f in files {
    log::info!("File: {:?}", f);
    if let Ok(file) = f {
      log::info!("File name: {:?}", file.file_name());
    }
  }

  // let recipes = vec![];
  // files.map(|f| {
  //
  //
  // });
  Ok(vec![])
}

#[tauri::command]
#[specta::specta]
fn show_main_window(app_handle: tauri::AppHandle) {
  let window = app_handle.get_webview_window("main");
  if let Some(w) = window {
    w.show().map_err(|e| log::error!("Failed to show window: {:?}", e)).ok();
  }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  let builder = Builder::<tauri::Wry>::new().commands(collect_commands![list_recipes, show_main_window]);

  #[cfg(debug_assertions)]
  builder.export(Typescript::default(), "../src/bindings.ts").expect("Failed to export typescript bindings");

  tauri::Builder::default()
    .plugin(tauri_plugin_opener::init())
    .plugin(tauri_plugin_log::Builder::new().build())
    .invoke_handler(builder.invoke_handler())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
