// supabaseClient.js
// import { createClient } from '@supabase/supabase-js';
// export const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabaseUrl = "https://tcsfhsjvdwedulygnson.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjc2Zoc2p2ZHdlZHVseWduc29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNjk2NTAsImV4cCI6MjA3Nzc0NTY1MH0.9Td-A2V-pTJ71bLxSk_s1EXAMxVjt3WC1Qpq5qxWBTI"; // found in Project Settings → API

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
