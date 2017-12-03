package case_util

import (
	"encoding/json"
	"log"
)

type Suite struct {
	Author    string
	Project   string
	Version   string
	Case_list map[string]Case
}

type Case map[string]string

func Json2Suite(b []byte) *Suite {
	var s *Suite
	err := json.Unmarshal(b, s)
	if err != nil {
		log.Println(err)
	}
	log.Println(s.Author)
	return s
}
