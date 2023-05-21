export interface Imsg {
    msg:chatData
}

type chatData = (msg | divider | doc | img | link | replay)

type msg = {
    type: string
    message: string
    incoming: boolean
    outgoing: boolean
    subtype?: undefined
    img?: undefined
    preview?: undefined
    reply?: undefined

}
type divider = {
    type: string
    subtype?: undefined
    message: string
    incoming?: undefined
    outgoing?: undefined
    img?: undefined
    preview?: undefined
    reply?: undefined
}
type doc = {
    type: string
    subtype: string
    message: string
    incoming: boolean
    outgoing: boolean
    img?: undefined
    preview?: undefined
    reply?: undefined
}

type img = {
    type: string
    subtype: string
    message: string
    img: string
    incoming: boolean
    outgoing: boolean
    preview?: undefined
    reply?: undefined
}
type link = {
    type: string
    subtype: string
    preview: string
    message: string
    incoming: boolean
    outgoing: boolean
    img?: undefined
    reply?: undefined
}

type replay = {
    type: string
    subtype: string
    reply: string
    message: string
    incoming: boolean
    outgoing: boolean
    preview?: undefined
    img?: undefined
}