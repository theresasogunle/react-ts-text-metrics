declare module 'text-metrics' {

  export type Styles  = React.CSSProperties 

  export const init: (
    htmlElement:Element | Styles |  null,
    styleOverwrites?: Styles
  ) =>  TextMetrics

  export interface Options {
    multiline: boolean
  }

  export interface TextMetrics {
    padding: () => number
    parseArgs: (text:string, options?: Options, styleOverwrites?: Styles) => 
      { text:string, options: Options, styleOverwrites: Styles, styles: Styles }
    width: (text:string, options?: Options, styleOverwrites?: Styles) => number
    height: (text:string, options?: Options, styleOverwrites?: Styles) => number
    lines: (text:string, options?: Options, styleOverwrites?: Styles) => string[]
    maxFontSize: (text:string, options?: Options, styleOverwrites?: Styles) => string | undefined
  }
}
