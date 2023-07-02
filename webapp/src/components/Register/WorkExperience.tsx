import { useWorkExperience } from '../../hooks/useWorkExperience'
import Utils from '../../utils'

interface Props {
    onClick: () => void
}

const defaultLength = Utils.getDefaultWorkExpLength()

export function WorkExperience({ onClick }: Props) {
    const { handleStateIndex, workExp } = useWorkExperience()

    return (
        <section>
            {Array.from({ length: defaultLength }, (_, i) => i).map((_, i) => {
                return (
                    <article className="flex flex-col my-8">
                        <div>
                            <input
                                type="text"
                                placeholder="charge exg: Backend developer"
                                name="charge"
                                onChange={(e) => handleStateIndex(e, i)}
                                value={workExp[i].charge}
                            />{' '}
                            <span>@</span>{' '}
                            <input
                                type="text"
                                placeholder="company name: exg. Microsoft"
                                name="company"
                                onChange={(e) => handleStateIndex(e, i)}
                                value={workExp[i].company}
                            />
                        </div>
                        <textarea
                            name="description"
                            placeholder="What was your main tasks there"
                            onChange={(e) => handleStateIndex(e, i)}
                            value={workExp[i].description}
                        ></textarea>
                    </article>
                )
            })}
            <button onClick={onClick}>next</button>
        </section>
    )
}
