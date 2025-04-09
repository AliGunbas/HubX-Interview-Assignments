import { useState } from "react"
import "../assets/styles/style.css"
import { SliderPage } from "../types"

export const SliderButtons = (props: { sliderPages: SliderPage[], handleChangeSliderPage: (arg: number) => void, selectedButton:number}) => {
    const { sliderPages, handleChangeSliderPage, selectedButton } = props

  



    return (
        <div className="slider-btn-container">
            {
                sliderPages.map((item: any) => {
                    return <button key={item.id} id={`slider-button-${item.id}`} onClick={() => handleChangeSliderPage(item.id)} className={selectedButton == item.id ? "selected" : ""}>
                        <item.icon />
                        <span>
                            {item.title}
                        </span>
                    </button>
                })
            }
        </div>
    )
}