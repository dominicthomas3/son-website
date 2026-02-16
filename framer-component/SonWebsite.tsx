// Sŏn Restaurant — Framer Code Component
// This component embeds the full Sŏn website inside Framer
// via an iframe. The source site is hosted on GitHub Pages.
//
// HOW TO USE IN FRAMER:
// 1. Open your Framer project (Son Portfolio)
// 2. In the left panel, click "Assets" (puzzle piece icon)
// 3. Click "Code" tab at the top
// 4. Click "+" → "New Component"
// 5. Paste this entire file content
// 6. Save (Cmd/Ctrl+S)
// 7. Drag "SonWebsite" from the Assets panel onto your page
// 8. In properties panel: set Width to "Fill" and Height to "Fill"
// 9. Delete any other content on the page
// 10. Publish!

import { addPropertyControls, ControlType } from "framer"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function SonWebsite(props: {
    siteUrl?: string
    style?: React.CSSProperties
}) {
    const {
        siteUrl = "https://dominicthomas3.github.io/son-website/",
        style,
    } = props

    return (
        <iframe
            src={siteUrl}
            style={{
                ...style,
                width: "100%",
                height: "100vh",
                border: "none",
                display: "block",
            }}
            title="Sŏn — Fine Dining Korean"
            allow="forms"
        />
    )
}

addPropertyControls(SonWebsite, {
    siteUrl: {
        type: ControlType.String,
        title: "Site URL",
        defaultValue: "https://dominicthomas3.github.io/son-website/",
        description: "URL of the hosted Sŏn website",
    },
})
