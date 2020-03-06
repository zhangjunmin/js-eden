const React = require("react")
// 解析utf
const PropTypes = require("prop-types")

const Layout = (props)=> {
    return(
        <html lang="zh-cn">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{props.title}</title>
            </head>
            <body>{props.children}</body>
        </html>
    )
}

Layout.propTypes = {
    title: PropTypes.string
}
module.exports = Layout