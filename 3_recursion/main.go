package main

func binarySearch(arr []int, target, left, right int) int {
	mid := left + (right-left)/2
	if left > right {
		return -1
	}
	if arr[mid] == target {
		return mid
	}

	if arr[mid] < target {
		return binarySearch(arr, target, mid+1, right)
	}
	return binarySearch(arr, target, left, mid-1)
}
