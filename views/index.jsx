const React = require('react');
const PropTypes = require("prop-types")
const Layout = require("./layout")
// const 
const Index = (props) => {
    return (
        <Layout title={props.title}>
            <h1>{props.title}</h1>
            <p> hello {props.title}</p>
        </Layout>

    );
}

Index.propTypes = {
    title: PropTypes.string
}

module.exports = Index;