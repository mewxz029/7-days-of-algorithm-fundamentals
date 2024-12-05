package main

import (
	"fmt"
	"math"
)

func mySqrt(x int) int {
	left := 1.0
	right := float64(x)
	result := 0.0
	for left <= right {
		mid := math.Floor(float64(left + (right-left)/2))
		pow := mid * mid
		if pow <= float64(x) {
			result = mid
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return int(result)
}

func main() {
	fmt.Println(mySqrt(4))
	fmt.Println(mySqrt(8))
}
