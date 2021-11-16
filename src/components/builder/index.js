import React, { useState } from 'react'

const Form = (
  {
    principal,
    namePrincipal,
    sub,
    nameSub,
    button = null,
    type,
    handle,
    options = [],
    addOption
  }) => {
  return (
    <form>
      <input
        name={namePrincipal}
        type='text'
        value={principal}
        onChange={handle}
      />

      <input
        name={nameSub}
        type='text'
        value={sub}
        onChange={handle}
      />

      {type !== 'welcome' &&
        <label>
          Type answer:
          <select
            name='type'
            value={type}
            onChange={handle}
          >
            <option value='text'>Text</option>
            <option value='number'>Number</option>
            <option value='options'>Options</option>
          </select>
        </label>}

      {type === 'options' &&
        <>
          {options.map((option, i) => (
            <input
              type='text'
              value={option.text}
              name={`options${i}`}
              data-key={i}
              onChange={handle}
              key={i}
            />
          ))}
          <button
            type='button'
            onClick={addOption}
          >
            ADD OPTION
          </button>
        </>}

      {button &&
        <label>
          Placeholder button:
          <input
            name='button'
            value={button}
            type='text'
            onChange={handle}
          />
        </label>}

      <button type='button'>SAVE</button>
    </form>
  )
}

export const Builder = ({ slide, loading, handle, addOption }) => {
  const [typeAnswer, setTypeAnswer] = useState(slide.type)
  if (loading) return 'loading...'

  const changeType = (e) => {
    setTypeAnswer(e.target.value)
  }

  if (slide.type === 'welcome') {
    const { text, subtext, button, type } = slide
    return (
      <Form
        principal={text}
        namePrincipal='text'
        sub={subtext}
        nameSub='subtext'
        button={button}
        changeType={changeType}
        typeAnswer={typeAnswer}
        type={type}
        handle={handle}
      />
    )
  }

  const { answer, subtext, type, options } = slide
  return (
    <Form
      principal={answer}
      namePrincipal='answer'
      sub={subtext}
      nameSub='subtext'
      changeType={changeType}
      options={options}
      typeAnswer={typeAnswer}
      type={type}
      handle={handle}
      addOption={addOption}
    />
  )
}
