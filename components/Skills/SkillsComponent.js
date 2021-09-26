import React from 'react'
import Image from 'next/image'

import skills from '/assets/images/Skills.png'

export default function SkillsComponent() {
    return (
        <div className="content py-4 has-text-left">
            <div className="is-size-4 has-text-weight-bold"><span>Skills:</span></div>
            <div>
              <Image src={skills} alt="Habilidades"></Image>
            </div>
        </div>
    )
}
