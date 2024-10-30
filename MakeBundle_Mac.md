# Instructions for making an .app for macOS (Intel and Apple Silicon)

the `deno.jsonc` file has an task for creating a base bundle `.app` for mac.
```bash
deno --version
# it will show the deno version
deno task build:bin
deno task create:app:mac
```

that commands will create a basic structure for the macapp, now you will need to configure the property list file (info.plist)
there is an example:
```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleName</key>
    <string>MyApp</string> <!-- change this to your prefs -->
    <key>CFBundleVersion</key>
    <string>1.0</string> <!-- change this to your prefs -->
    <key>CFBundleIdentifier</key>
    <string>com.example.myapp</string> <!-- change this to your prefs -->
    <key>CFBundleExecutable</key>
    <string>myapp</string> <!-- change this to your prefs -->
    <key>CFBundlePackageType</key>
    <string>APPL</string>
    <key>LSMinimumSystemVersion</key>
    <string>11.7.10</string> <!-- Set to your system version -->
</dict>
</plist>
```

place that file (`Info.plist`) in the `MyApp.app/Contents/` directory.

## Adding resources (html, css, js, xml, jsonc)

This is an manual task like placing the Info.plist file in the app contents directory, but at this time,
we'll place the files `html, css, js, xml, jsonc` in the `<AppName>.app/Contents/Resources` directory,
just drag the files into the directory an baam! your App bundle for Mac is ready!
