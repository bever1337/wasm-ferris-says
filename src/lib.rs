mod utils;

use ferris_says;
use std::io::Cursor;
use wasm_bindgen::prelude::*;

extern crate web_sys;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn say(message: String, count: usize) -> String {
    let mut cursor = Cursor::new(Vec::new());
    ferris_says::say(message.as_bytes(), count, cursor.get_mut()).unwrap();
    return String::from_utf8(cursor.into_inner()).unwrap();
}
