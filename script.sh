#!/bin/bash
#
#
################################################
# Calculator to calculate days between two dates
################################################


date1="March 4, 1994"
date2="November 20, 2024"

time1=$(date -d "$date1" +%s)
echo "Time1(the number of seconds between the unix epoch 1 Jan, 1970 to $date1)  : $time1 seconds"

time2=$(date -d "$date2" +%s)
echo "Time2(the number of seconds between the unix epoch 1 Jan, 1970 to $date2) : $time2 seconds"

diff=$(expr $time2 - $time1)
echo "The number of seconds between $date1(or $time1 seconds) and $date2(or $time2 seconds) : $diff"

secondsinaday=$(expr 24 \* 60 \* 60)
echo "The number of seconds in a day : $secondsinaday"

numberofdays=$(expr $diff / $secondsinaday)
echo "The number of days between $date1 and $date2 : $numberofdays days"

numberofyears=$(expr $numberofdays / 365)
numberofdaysremain=$(expr $numberofdays % 365)
numberofmonths=$(expr $numberofdaysremain / 30)
numberofmonthsdaysremain=$(expr $numberofdaysremain % 30)
echo "The number of years between $date1 and $date2 : $numberofyears years, $numberofmonths months and $numberofmonthsdaysremain days"
