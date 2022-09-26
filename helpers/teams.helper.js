module.exports.compareTwoTeamsFromStat = (stat, allStat, index) => {
	let res = Array.from(allStat);
	if(stat.points > allStat[index].points) {
		res.splice(index + 1,0, stat);
		return res;
	} else if (stat.points === allStat[index].points) {
		if (stat.goal_average > allStat[index].goal_average) {
			res.splice(index + 1,0, stat);
			return res;
		} else if(stat.goal_average === allStat[index].goal_average) {
			if(stat.number_of_goal > allStat[index].number_of_goal) {
				res.splice(index + 1, 0, stat);
				return res;
			}
		}
	}
	if(index !== 0) res = this.compareTwoTeamsFromStat(stat,res,index -1);
	else res.unshift(stat)
	return res;
}