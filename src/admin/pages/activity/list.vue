<template>
  <div class="list-container">
    <!--Start: search box part-->
    <el-form :inline="true" :model="condition" class="demo-form-inline">
      <el-form-item label="Search by">
        <el-input
          v-model="condition.condition"
          placeholder="id, name or description"
        ></el-input>
      </el-form-item>
      <el-form-item label="status">
        <el-select v-model="condition.status" placeholder="status">
          <el-option label="All" value=""></el-option>
          <el-option label="Normal" value="normal"></el-option>
          <el-option label="Draft" value="draft"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Search</el-button>
        <el-button @click="SearchAll">Search All</el-button>
      </el-form-item>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          order by<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="sort">default</el-dropdown-item>
          <el-dropdown-item command="activity_id">id</el-dropdown-item>
          <el-dropdown-item command="sort">sort</el-dropdown-item>
          <el-dropdown-item command="gmt_Create">created</el-dropdown-item>
          <el-dropdown-item command="gmt_Modified">Modified</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

<!--TODO order function bug to be fixed-->
      <el-form-item
        v-if="condition.order === 'asc'"
        label=""
        
        style="margin-left:1rem;  "
      >
        <span class="order-container" @click="ascChange">
          <i class="el-icon-caret-top" ></i>
        </span>
      </el-form-item>
      <el-form-item
        v-if="condition.order === 'desc'"
        @click="descChange"
        label=""
        style="margin-left:1rem"
      >
        <span class="order-container" @click="descChange">
          <i class="el-icon-caret-bottom" ></i> </span
      ></el-form-item>
    </el-form>
    <!--End: search box part-->
    <!--Start: table part-->
    <el-table
      :data="records"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      max-height="700px"
    >
      <el-table-column prop="activityId" label="id" width="180">
      </el-table-column>
      <el-table-column prop="name" label="name" width="180"> </el-table-column>
      <el-table-column prop="frontImgUrl" label="front">
        <template slot-scope="scope">
          <el-image
            style="width: 150px; height: 80px"
            :src="scope.row.frontImgUrl"
            fit="cover"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="sort">
        <template slot-scope="scope">
            <input
              type="text"
              @keyup.enter="handleEidtSort(scope.row.activityId, scope.row.sort)"
              @blur="handleEidtSort(scope.row.activityId, scope.row.sort)"
              v-model="scope.row.sort"
              style="width:1rem; text-align:center"
            />
          </template>  
        
      </el-table-column>
      <el-table-column prop="status" label="status"> </el-table-column>
      <el-table-column prop="gmtCreate" label="Created" width="100">
      </el-table-column>
      <el-table-column prop="gmtModified" label="Modified" width="100">
      </el-table-column>

      <el-table-column fixed="right" label="operation" width="180">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row.activityId)" type="text" size="small"
            >Edit</el-button
          >
          <el-button
            @click="handleDelete(scope.row.activityId)"
            type="text"
            size="small"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--End: table part-->

    <!--Start: pagination part-->
    <div class="block">
      <el-pagination
        
        @current-change="handleCurrentChange"
        :current-page.sync="this.current"
        :page-size="this.size"
        layout="total, prev, pager, next,jumper"
        :total="this.total"
      >
      </el-pagination>
    </div>
    <!--End: pagination part-->
  </div>
</template>

<script>
import activityAPI from "@/admin/admin-api/activityAPI";
import pictureAPI from "@/admin/admin-api/pictureAPI";
 

const limit = 6;
export default {
  data() {
    return {
      condition: {
        condition: "",
        status: "",
        sortBy: "sort",
        order: "asc",
      },
      records: [],
      
      /*page info*/
      total: "",
      current: 1,
      hasPrevious: "",
      hasNext: "",
      pages: "",
      size: "",
    };
  },
  created() {
    this.init(1);
  },
  methods: {
    /*init table data */
    init(pageNum) {
      activityAPI.queryPage(limit, pageNum, this.condition).then((response) => {
        this.records = response.data.data.records;
        this.total = response.data.data.total;
        this.current = response.data.data.current;
        this.hasPrevious = response.data.data.hasPrevious;
        this.hasNext = response.data.data.hasNext;
        this.pages = response.data.data.pages;
        this.size = response.data.data.size;
        console.log(response);
      });
    },
    /*search all data */
    SearchAll() {
      this.condition = {
        condition: "",
        status: "",
        sortBy: "sort",
        order: "asc;",
      };
      this.init(1);
    },
    handleEdit(activityId) {
      this.$router.push("edit/"+activityId);
    },

    /* style the table */
    /* eslint-disable */
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 4 === 1) {
        return "warning-row";
      } else if (rowIndex % 4 === 3) {
        return "success-row";
      }
      return "";
    },
    onSubmit() {
      this.init(1);
    },
    handleDelete(activityId) {
      //1 let user confirm 
      this.$confirm(
        "This operation will delete this acitivty and all its pictures, are you sure to continue?",
        "Hint",
        {
          confirmButtonText: "confirm",
          cancelButtonText: "cancel",
          type: "warning",
          center: true,
        }
      ).then(() => {
        //2 get picture list of the acitivity by calling api
        pictureAPI.getPicList(activityId).then(response=>{
          let picList = response.data.data.data;
          console.log("picList: ",picList);
          //3 batchDelete pictures on oss
          pictureAPI
          .batchDelete(picList)
          .then(() => {
            //3 delete the activity and pictures in database
            this.deleteActivity(activityId);
          })
        });
      });
    },
    deleteActivity(activityId){
        activityAPI
          .discard(activityId)
          .then((response) => {
            // prompt the success message
            this.$message({
              type: "success",
              message: "Activity is deleted",
            });
            // refresh data

            this.init(this.current);
          })
          .catch((error) => {
            this.$message({
              type: "error",
              message: "Some error happened when deleting data",
            });
          });
    },
    /* Part to deal with pagination*/
    handleCurrentChange(val) {
      this.init(val);
    },

    /* Par to deal with sort */
    handleCommand(command) {
      this.condition.sortBy = command;
      this.init(1);

    },

    ascChange() {
      this.condition.order = "desc";
      console.log("ascChange",this.condition);
      this.init(1);
    },
    descChange() {
      this.condition.order = "asc";
      console.log("descChange",this.condition);
      this.init(1);
    },
    /**method to update the sort value */
    handleEidtSort(activityId, sort) {
      activityAPI.update({ activityId, sort }).then(() => {
        this.init(this.current)

      });
    },
  },
};
</script>
<style>
.el-table .warning-row {
  background: oldlace !important;
}

.el-table .success-row {
  background: #f0f9eb !important;
}
.list-container {
  padding: 2rem;
}
.el-form--inline {
  text-align: left;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.order-selected {
  color: red;
}
.order-container{
  background-color: #409EFF;
}
</style>
