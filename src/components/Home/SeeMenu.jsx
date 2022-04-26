import React from 'react'
import { Link } from 'react-router-dom'

const SeeMenu = () => {
  return (
    <section class="section banner-main H_SEC_SEE_MENU fp-section active fp-table fp-completely SeeMenuContainer" id="section0"
    data-fp-styles={{opacity: '1'}}
    data-anchor="Homepage">
        <div class="fp-tableCell" style={{height: "325px"}}>
			<Link to="/menu" class="see-the-menu-btn">See The Menu</Link>
		</div>
</section>
  )
}

export default SeeMenu