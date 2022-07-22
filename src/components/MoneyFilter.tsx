import React, {useState} from "react";

type MoneyFilterPropsType = {
    money: Array<MoneyArrayType>
}
type MoneyArrayType = {
    banknots: string,
    value: number,
    number: string
}
type filterType = 'all' | 'ruble' | 'dollar'

export const MoneyFilter = (props: MoneyFilterPropsType) => {
    const [filter, setFilter] = useState<filterType>('all')

    let currentValue = props.money;
    if (filter === 'dollar') {
        currentValue = props.money.filter((filtredMoney) => filtredMoney.banknots === 'Dollars')
    }
    if (filter === 'ruble') {
        currentValue = props.money.filter((filtredMoney) => filtredMoney.banknots === 'RUBLS')
    }
    const onClickHandler = (nameButton: filterType) => {
            setFilter(nameButton)
    }
            return (
                <>
                    <table>
                        <tbody>
                        {currentValue.map((objectFromMoney, index) => {
                            return (
                                <tr key={index}>
                                    <td>{objectFromMoney.banknots}</td>
                                    <td>{objectFromMoney.value}</td>
                                    <td>{objectFromMoney.number}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <button onClick={() => onClickHandler('all')}>all</button>
                    <button onClick={() => onClickHandler('ruble')}>rubles</button>
                    <button onClick={() => onClickHandler('dollar')}>dollars</button>
                </>
            )
        }
