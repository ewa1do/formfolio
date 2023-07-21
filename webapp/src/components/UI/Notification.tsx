interface Props {
    message: string
}

export function Notification({ message }: Props) {
    return (
        <div className="border-2 shadow-sm shadow-aqua-50 border-aqua-100 fixed bottom-5 left-[50%] bg-aqua-100 translate-x-[-50%] text-light p-2 rounded-sm inline-block text-[8px] sm:text-xs">
            {message}
        </div>
    )
}
