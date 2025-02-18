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
  let resource_dir = app_handle.path().resolve("", BaseDirectory::Resource).map_err(|e| e.to_string())?;
  log::info!("Resource directory: {:?}", resource_dir);
  let files = std::fs::read_dir(resource_dir).map_err(|e| e.to_string())?;
  // let recipes = vec![];
  // files.map(|f| {
  //
  //
  // });
  Ok(vec![])
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  let builder = Builder::<tauri::Wry>::new().commands(collect_commands![list_recipes]);

  #[cfg(debug_assertions)]
  builder.export(Typescript::default(), "../src/bindings.ts").expect("Failed to export typescript bindings");

  tauri::Builder::default()
    .plugin(tauri_plugin_opener::init())
    .plugin(tauri_plugin_log::Builder::new().build())
    .invoke_handler(builder.invoke_handler())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
