import React from 'react'
import { Card } from 'react-bulma-components'
import containerStyles from '../styles/Container.module.css'

export default function programacion() {
    return (
        <div className={containerStyles.container}>
            <Card>
                <Card.Header>
                    <Card.Header.Title name="Alt" />
                    <Card.Header.Icon src="http://bulma.io/images/placeholders/1280x960.png" />
                </Card.Header>
            </Card>
        </div>
    )
}
