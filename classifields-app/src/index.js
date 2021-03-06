import "@babel/polyfill"
import React from "react"
import { render } from "react-dom"
import Root from "./components/Root"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import * as theme from "./theme"
import { ApolloProvider } from "react-apollo"
import { Provider } from "react-redux"
import graphClient from "#src/api/graphqlClient"
import store from "./store"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    html, body , #app {
        height: 100%;
        margin:0;
        padding:0;
        width:100%;
    }
    body{
        font-family: Roboto, sans-serif;
    }
`

render(
    <Provider store={store}>
    <ApolloProvider client={graphClient}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Root />
        </ThemeProvider>
    </ApolloProvider>
    </Provider>,
    document.getElementById("app")
)
