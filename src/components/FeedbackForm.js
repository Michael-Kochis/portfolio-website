import React from 'react'

function FeedbackForm() {
    return (
<article id="contact" class="wrapper style4">
				<div class="container medium">
					<header>
						<h2>Contact me.</h2>
						<p>Form currently does not work, but it's migrated to JS/React, so I'll get it up and working soon.</p>
					</header>
					<div class="row">
						<div class="col-12">
							<form method="post" action="#">
								<div class="row">
									<div class="col-6 col-12-small">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div class="col-6 col-12-small">
										<input type="text" name="email" id="email" placeholder="Email" />
									</div>
									<div class="col-12">
										<input type="text" name="subject" id="subject" placeholder="Subject" />
									</div>
									<div class="col-12">
										<textarea name="message" id="message" placeholder="Message"></textarea>
									</div>
									<div class="col-12">
										<ul class="actions">
											<li><input type="submit" value="Send Message" /></li>
											<li><input type="reset" value="Clear Form" class="alt" /></li>
										</ul>
									</div>
								</div>
							</form>
						</div>
						<div class="col-12">
							<hr />
							<h3>Find me on ...</h3>
							<ul class="social">
								<li><a href="https://www.facebook.com/Rhishisikk" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
								<li><a href="https://www.linkedin.com/in/michael-kochis-43316623/" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
								<li><a href="https://github.com/Michael-Kochis" class="icon brands fa-github"><span class="label">Github</span></a></li>
								<li><a href="https://ko-fi.com/rhishisikk" class="icon solid fa-mug-hot"><span class="label">Ko-Fi</span></a></li>
								
							</ul>
							<hr />
						</div>
					</div>
					<footer>
						<ul id="copyright">
							<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</footer>
				</div>
			</article>
            )
}

export {
    FeedbackForm
}