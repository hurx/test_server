package db_util

import (
	"test_server/db_util"
	"testing"
)

func Test_con(t *testing.T) {
	db := db_util.NewClient()
	db_util.Select(db, "id", "name")
}
