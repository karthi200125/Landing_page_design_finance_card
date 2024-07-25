import React from 'react'
import TextAnimation from '../animations/TextAnimation'

const FAQ = () => {
  return (
    <section className='min-h-[600px] flex flex-col justify-center items-center gap-10'>
      <h2 className='text-center w-full'><TextAnimation text="Frequnetly Asked Questions You Have!" /></h2>
      <p><TextAnimation text="Lets get ready to using Capo cards" /></p>
      <h3><TextAnimation text="Does Capo have mobile appilcation version" /></h3>

      <div className='h-[150px] w-[150px] bg-[var(--gray)] rounded-[20px] mx-auto p-5 overflow-hidden space-y-3'>
        <h4><TextAnimation text="" />Capo App!</h4>
        <div className='w-full h-full bg-black rounded-[10px]'>

        </div>
      </div>

      <h3><TextAnimation text="How can we have capo cards" /></h3>
      <h3><TextAnimation text="Can we have multiple accounts in kapo?" /></h3>
      <h3><TextAnimation text="How use Capo cards" /></h3>
    </section>
  )
}

export default FAQ