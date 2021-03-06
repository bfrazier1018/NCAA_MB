$(document).on("ready", function() {

// --------------- FOR GAME SHOW PAGE -------------------------- 
	if ($(".js-game-show-page").length > 0) {
		findGameTeam1();
		findGameTeam2();
	}

	$(".js-game-name-team1").hide();
	$(".js-game-name-team2").hide();

// ----------------- FOR HOME PAGE ----------------------------------
	$(".predicted-winner-header").empty();
	$(".confidence-level-header").empty();
	$(".team-stats-row").hide();
	$(".basic-team-info-row").hide();
	$(".final-score-team1").hide();
	$(".final-score-team2").hide();

	// Team Controller API Calls. In team.js
	$("#js-select-team1").on("change", function() {
		findInfoTeam1();
		findScheduleTeam1();
		$(".predicted-winner-header").text("Predicted Winner");
		$(".confidence-level-header").text("Confidence Level");
	});

	$("#js-select-team2").on("change", function() {
		findInfoTeam2();
		$(".predicted-winner-header").text("Predicted Winner");
		$(".confidence-level-header").text("Confidence Level");
		$(".team-stats-row").show();
		$(".basic-team-info-row").show();
		$(".header-row").hide();
		$(".main-image").slideUp();
		findScheduleTeam2();
	});

 // ------------ Compare Schedules Button ------------------------
	$(".js-compare-schedule-button").on("click", function() {
		event.preventDefault();
		$("#schedule-modal").modal("show");
	})
});




