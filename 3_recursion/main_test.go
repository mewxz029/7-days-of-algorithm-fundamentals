package main

import "testing"

func TestBinarySearch(t *testing.T) {
	tests := []struct {
		name   string
		arr    []int
		target int
		want   int
	}{
		{"target = 5 then should return 4 from 1,2,3,4,5", []int{1, 2, 3, 4, 5}, 5, 4},
		{"target = 1 then should return 0 from 1,2,3,4,5", []int{1, 2, 3, 4, 5}, 1, 0},
		{"target = 3 then should return 2 from 1,2,3,4,5", []int{1, 2, 3, 4, 5}, 3, 2},
		{"target = 6 then should return -1 from 1,2,3,4,5", []int{1, 2, 3, 4, 5}, 6, -1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			left := 0
			right := len(tt.arr) - 1
			result := binarySearch(tt.arr, tt.target, left, right)
			AssertEqual(t, result, tt.want)
		})
	}
}

func AssertEqual(t testing.TB, got, want int) {
	t.Helper()
	if got != want {
		t.Errorf("Expected %d but got %d", want, got)
	}
}
