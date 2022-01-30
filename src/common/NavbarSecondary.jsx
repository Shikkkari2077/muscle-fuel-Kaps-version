import React from "react";
import { Link } from "react-router-dom";

const NavbarSecondary = () => {
  return (
    <>
      	<div class="container">
		<div class="row">
			<div class="col-12 d-flex justify-content-between">
				<a href="index.html" class="muscle-fuel"><img src="img/muscle-fuel.svg" alt="Muscle Fuel"/></a>
				<div class="navigation">
					<div class="wsmenucontainer clearfix">
						<div class="overlapblackbg"></div>
						<div class="wsmobileheader clearfix">
							<a id="wsnavtoggle" class="animated-arrow"><span></span></a>
						</div>
						<div class="wsmain">
							<nav class="wsmenu clearfix">
								<ul class="mobile-sub wsmenu-list">
									<li><Link to="/" class="active">Home</Link></li>
									<li><a href="javascript:void(0);">Why Muscle Fuel?</a>
										<ul class="wsmenu-submenu why-muscle-fuel">
											<li>
												<div class="row">
													<div class="col-lg-4 col-md-4 col-sm-6">
														<div class="w-100">
															<h4>CEO MESSAGE</h4>
															<h2>Just a quick hello</h2>
															<p>Our long-term purpose is empowering people everywhere to revolutionize their health. We’re focusing on making low carb simple for people.</p>
															<a href="why-muscle-fuel.html" class="button">GET TO KNOW ABOUT US</a>
														</div>	
													</div>
													<div class="col-lg-4 col-md-4 col-sm-6">
														<p>Our mission is to find the most trustworthy science and practical knowledge about health, make it inspiring and simple to use, and accessible and free for everyone.</p>
													</div>
												</div>
											</li>	
										</ul>
									</li>
									<li><a href="javascript:void(0);">Learn</a>
										<ul class="wsmenu-submenu">
											<li>
												<div class="row">
													<div class="col-lg-3 col-md-3 col-sm-6">
														<div class="w-100">
															<img src="img/random-image-12-300x200.jpg" class="img-fluid" alt="random-image-12-300x200"/>
															<h4>Eggplant Salad</h4>
															<p>Here you have over 700 delicious low-carb recipes to choose from.</p>
															<a href="recipe.html" class="button">Read More</a>
														</div>	
													</div>
													<div class="col-lg-3 col-md-3 col-sm-6">
														<div class="w-100">
															<img src="img/random-image-11-300x200.jpg" class="img-fluid" alt="Salad sandwiches"/>
															<h4>Salad sandwiches</h4>
															<p>Here you have over 700 delicious low-carb recipes to choose from.</p>
															<a href="recipe.html" class="button">Read More</a>
														</div>	
													</div>
													<div class="col-lg-3 col-md-3 col-sm-6">
														<div class="w-100">
															<img src="img/random-image-5-300x200.jpg" class="img-fluid" alt="Keto Deviled Eggs"/>
															<h4>Keto Deviled Eggs</h4>
															<p>Here you have over 700 delicious low-carb recipes to choose from.</p>
															<a href="recipe.html" class="button">Read More</a>
														</div>	
													</div>
													<div class="col-lg-3 col-md-3 col-sm-6 other-recipes">
														<div class="w-100">															
															<h4>OTHER RECIPES</h4>
															<ul>
																<li><a href="recipe.html">Classic Egg Salad</a></li>
																<li><a href="recipe.html">Keto western omelet</a></li>
																<li><a href="recipe.html">Boiled eggs potato</a></li>
																<li><a href="recipe.html">Low-carb garlic fish</a></li>
																<li><a href="recipe.html">Cashew sauce</a></li>
																<li><a href="recipe.html">Keto egg muffins</a></li>
															</ul>
														</div>	
													</div>
												</div>
											</li>	
										</ul>
									</li>
									<li><a href="pricing.html">Pricing</a></li>
									<li><Link to="/menu">Menu</Link></li>
									<li><Link to="/sign-in">Sign in</Link>
                                        <ul class="wsmenu-submenu">
                                            <li><Link to="/sign-in">Login</Link></li>
                                            <li><Link to="/sign-up">Register</Link></li>
                                        </ul>	
                                    </li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="language-div"><a href="javascript:void(0);">العربية</a></div>
					<div class="subscribe-div"><a href="package.html" class="button">Subscribe Now</a></div>
				</div>				
			</div>
		</div>
 	</div>
    </>
  );
};

export default NavbarSecondary;
