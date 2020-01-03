<template>
  <div id="app" style="width:100%">
    <div>
      <!-- Left content -->
      <div class="leftContentDesktop" :style="{width:leftWidth+'px'}" v-if="!isMobile">
        <div style="padding: 30px;">
          <div style="height:100%">
            <div class="paddings">The active status: <span class="importantMsg">{{propValues.isActive?'':'not '}}<b>active</b></span>.</div>
            <div class="paddings"><span class="leftLink" style="color:#42b983" @click="boolChange('isActive')">Click here</span> to change the active status.</div>
            <hr>
            <div class="paddings"><span class="leftLink" @click="hrefTo('Introduction')"><b>Introduction</b></span></div>
            <div class="paddings"><span class="leftLink" @click="hrefTo('Install')"><b>Install</b></span></div>
            <div style="display:flex">
              <div class="paddings"><span class="leftLink" @click="hrefTo('Props')"><b>Props</b></span></div>
              <div class="paddings trianglHover" @click="isShowPropsMethod"><div class="triangleDown" v-show="!isShowProps"></div></div>
              <div class="paddings trianglHover" @click="isShowPropsMethod"><div class="triangleUp" v-show="isShowProps"></div></div>
            </div>
            <div style="overflow:hidden">
              <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
                <div v-show="isShowProps">
                  <div v-for="(val,key,index) in propValues" :key="index+'i'" class="paddings2"><span class="leftLink" @click="hrefTo(key)">{{key}}</span></div>
                </div>
              </transition>
            </div>
            <div class="paddings"><span class="leftLink" @click="hrefTo('Event')"><b>Event</b></span></div>
            <div class="paddings"><span class="leftLink" @click="hrefTo('Code')"><b>Code</b></span></div>
            <div class="paddings"><span class="leftLink" @click="hrefTo('View')"><b>View</b></span></div>
          </div>
        </div>
      </div>
      <!-- Right content -->
      <div :style="{marginLeft:isMobile?0:leftWidth+'px'}" style="padding:15px;overflow-X:scroll;">
        <!-- Introduction -->
        <div class="paddings"><a name="Introduction"></a><h3>Introduction</h3></div>
        <div class="paddings"><span class="importantMsg">vue-spreadsheets</span> is an easy-to-use Vue component which creates an user input environment similar to Mircrosoft Excel.</div>
        <div class="paddings">Users can paste data directly from Excel to <span class="importantMsg">vue-spreadsheets</span>.</div>
        <div class="paddings">You can easily get the data by 'changeFunc' event when users input something.</div>
        <div class="paddings">The component is <span class="importantMsg">recommended to run on the desktop</span>.</div>
        <div class="paddings">When users use vue-spreadsheets with mobile devices, vue-spreadsheets can only provides basic input functions.</div>
        <hr>
        <!-- Install -->
        <div class="paddings"><a name="Install"></a><h3>Install</h3></div>
        <div class="paddings" v-show="!isMobile">The active status: <span :class="{importantMsg:propValues.isActive}">{{propValues.isActive?'':'not '}}<b>active</b></span>.</div>
        <div class="paddings" v-show="propValues.isActive&&!isMobile"><span class="importantMsg">Warning</span>: the vue-spreadsheets view page is now listen the keydown event.</div>
        <div class="paddings" v-show="propValues.isActive&&!isMobile"><span class="importantLink" @click="boolChange('isActive')">Click here</span> to change the active status.</div>
        <div class="paddings" v-show="propValues.isActive&&!isMobile">When the vue-spreadsheets view page is listening the keydown event, please do not use Ctrl + C to copy the code directly.</div>
        <div class="paddings" v-show="propValues.isActive&&!isMobile">Instead, you should use the right mouse button to open the context menu to execute the copy command.</div>
        <div class="paddings"><span class="importantMsg">Step 1: npm</span></div>
        <div class="codeAreaBox" :style="{margin:isMobile?0:'10px'}">
         <code class="codeArea" :class="{codeAreaMobile:isMobile,codeAreaDeskTop:!isMobile}">
            <div>npm i vue-spreadsheets -s</div>
          </code>
        </div>
        <div class="paddings"><span class="importantMsg">Step 2: update main.js</span></div>
        <div class="codeAreaBox" :style="{margin:isMobile?0:'10px'}">
         <code class="codeArea" :class="{codeAreaMobile:isMobile,codeAreaDeskTop:!isMobile}">
            <div><span class="codeKeyword">import</span> <span class="codeVariable">vueSpreadsheets</span> <span class="codeKeyword">from</span> <span class="codeAttribute">'vue-spreadsheets'</span></div>
            <div><span class="codeKeyword">import</span> <span class="codeAttribute">'vue-spreadsheets/lib/vue-spreadsheets.css'</span></div>
            <div><span class="codeVariable">Vue</span>.<span class="codeFunction">use</span>(<span class="codeVariable">vueSpreadsheets</span>)</div>
          </code>
        </div>
        <hr>
        <!-- Props -->
        <div class="paddings"><a name="Props"></a><h3>Props</h3></div>
        <div class="paddings">When you change the values below, you can find the changed codes in <span class="importantLink" @click="hrefTo('Code')">Code</span>, or you can find the changed view in <span class="importantLink" @click="hrefTo('View')">View</span>.</div>
        <div class="paddings">
          <div :style="{overflow:isMobile?'scroll':'',overflowX:'scroll'}">
            <table class="featureTable" style="width:700px">
              <tr>
                <th class="featureCell">Props</th>
                <th class="featureCell">Description</th>
                <th class="featureCell">Type</th>
                <th class="featureCell">Default</th>
                <th class="featureCell">Value recommended</th>
                <th class="featureCell">Responsive</th>
                <th class="featureCell"><div style="width:150px;">Change the value</div></th>
              </tr>
              <tr>
                <td class="featureCell"><a name="isActive"></a>isActive</td>
                <td class="featureCell">
                  <div>Disable the view or not</div>
                  <div v-show="propValues.isActive&&!isMobile">If you wang to change props via this table, please <span class="importantLink" @click="boolChange('isActive')">turn off this prop first</span></div>
                </td>
                <td class="featureCell">Boolean</td>
                <td class="featureCell">true</td>
                <td class="featureCell">true</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell">
                  <select class="featureCellSelect" v-model="propValues.isActive" size="2">
                    <option class="featureCellInput" :value="true">true</option>
                    <option class="featureCellInput" :value="false">false</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="rows"></a>rows<span class="importantMsg">*</span></td>
                <td class="featureCell">Decide the number of rows</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">10</td>
                <td class="featureCell">Integer & >0</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.rows" @focus="tempRecord($event,'rows')" @blur="IntegerFit($event,'rows',0)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="maxRows"></a>maxRows</td>
                <td class="featureCell">Decide tableValue.length</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">0</td>
                <td class="featureCell">Integer & >=rows</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.maxRows" @focus="tempRecord($event,'maxRows')" @blur="IntegerFit($event,'maxRows',0)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="cols"></a>cols<span class="importantMsg">*</span></td>
                <td class="featureCell">Decide the number of columns</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">5</td>
                <td class="featureCell">Integer & >0</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.cols" @focus="tempRecord($event,'cols')" @blur="IntegerFit($event,'cols',0)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="maxCols"></a>maxCols</td>
                <td class="featureCell">Decide tableValue[0].length</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">0</td>
                <td class="featureCell">Integer & >=cols</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.maxCols" @focus="tempRecord($event,'maxCols')" @blur="IntegerFit($event,'maxCols',0)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="tableWidth"></a>tableWidth<span class="importantMsg">*</span></td>
                <td class="featureCell">Decide width(px) of the table</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">600</td>
                <td class="featureCell">Integer & >0</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.tableWidth" @focus="tempRecord($event,'tableWidth')" @blur="IntegerFit($event,'tableWidth',0)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="tableHeight"></a>tableHeight<span class="importantMsg">*</span></td>
                <td class="featureCell">Decide height(px) of the table. Textarea height(100px) is not included.</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">400</td>
                <td class="featureCell">Integer & >0</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.tableHeight" @focus="tempRecord($event,'tableHeight')" @blur="IntegerFit($event,'tableHeight',0)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="isColsTitleShow"></a>isColsTitleShow</td>
                <td class="featureCell">Decide whether columns' titles show</td>
                <td class="featureCell">Boolean</td>
                <td class="featureCell">true</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell">
                  <select @change="refreshVueSpreadsheets" class="featureCellSelect" v-model="propValues.isColsTitleShow" :disabled="propValues.isActive" size="2">
                    <option class="featureCellInput" :value="true">true</option>
                    <option class="featureCellInput" :value="false">false</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="colsTitles"></a>colsTitles</td>
                <td class="featureCell">Decide title names of each columns</td>
                <td class="featureCell">Array</td>
                <td class="featureCell">[...'A','B']</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">
                  [<div v-for="n of Math.max(propValues.cols,propValues.maxCols)" :key="n+'r'">[
                    <input class="featureCellInput" :disabled="propValues.isActive||(n!=1 && propValues.colsTitles[n-2]==undefined)" type="text" :value="propValues.colsTitles[n - 1]" @blur="arrayTextFit($event,'colsTitles',n-1)">  
                  ]{{n==propValues.cols?'':','}}</div>]
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="cellWidth"></a>cellWidth</td>
                <td class="featureCell">Decide width(px) of each columns</td>
                <td class="featureCell">Array</td>
                <td class="featureCell">Equal distribution</td>
                <td class="featureCell">[...Number,Number]</td>
                <td class="featureCell">No</td>
                <td class="featureCell">
                  [<div v-for="n of Math.max(propValues.cols,propValues.maxCols)" :key="n+'r'">[
                    <input class="featureCellInput" :disabled="propValues.isActive||(n!=1 && propValues.cellWidth[n-2]==undefined)" type="text" :value="propValues.cellWidth[n - 1]" @blur="arrayNumberFit($event,'cellWidth',n-1)">  
                  ]{{n==propValues.cols?'':','}}</div>]
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="cellWidthMin"></a>cellWidthMin</td>
                <td class="featureCell">Decide minimum width(px) of the cell</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">30</td>
                <td class="featureCell">Integer & >=30</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.cellWidthMin" @focus="tempRecord($event,'cellWidthMin')" @blur="IntegerFit($event,'cellWidthMin',-1)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="isRowsTitleShow"></a>isRowsTitleShow</td>
                <td class="featureCell">Decide whether rows' titles show</td>
                <td class="featureCell">Boolean</td>
                <td class="featureCell">true</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell">
                  <select @change="refreshVueSpreadsheets" class="featureCellSelect" v-model="propValues.isRowsTitleShow" :disabled="propValues.isActive" size="2">
                    <option class="featureCellInput" :value="true">true</option>
                    <option class="featureCellInput" :value="false">false</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="rowsTitles"></a>rowsTitles</td>
                <td class="featureCell">Decide title names of each rows</td>
                <td class="featureCell">Array</td>
                <td class="featureCell">[...'1','2']</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">
                  [<div v-for="n of Math.max(propValues.rows,propValues.maxRows)" :key="n+'r'">[
                    <input class="featureCellInput" :disabled="propValues.isActive||(n!=1 && propValues.rowsTitles[n-2]==undefined)" type="text" :value="propValues.rowsTitles[n - 1]" @blur="arrayTextFit($event,'rowsTitles',n-1)">  
                  ]{{n==propValues.rows?'':','}}</div>]
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="cellHeight"></a>cellHeight</td>
                <td class="featureCell">Decide height(px) of each rows</td>
                <td class="featureCell">Array</td>
                <td class="featureCell">Equal distribution</td>
                <td class="featureCell">[...Number,Number]</td>
                <td class="featureCell">No</td>
                <td class="featureCell">
                  [<div v-for="n of Math.max(propValues.rows,propValues.maxRows)" :key="n+'r'">[
                    <input class="featureCellInput" :disabled="propValues.isActive||(n!=1 && propValues.cellHeight[n-2]==undefined)" type="text" :value="propValues.cellHeight[n - 1]" @blur="arrayNumberFit($event,'cellHeight',n-1)">  
                  ]{{n==propValues.rows?'':','}}</div>]
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="cellHeightMin"></a>cellHeightMin</td>
                <td class="featureCell">Decide minimum height(px) of the cell</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">30</td>
                <td class="featureCell">Integer & >=30</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.cellHeightMin" @focus="tempRecord($event,'cellHeightMin')" @blur="IntegerFit($event,'cellHeightMin',-1)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="isTextareaShow"></a>isTextareaShow</td>
                <td class="featureCell">Decide whether textarea shows</td>
                <td class="featureCell">Boolean</td>
                <td class="featureCell">true</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell">
                  <select class="featureCellSelect" v-model="propValues.isTextareaShow" :disabled="propValues.isActive" size="2">
                    <option class="featureCellInput" :value="true">true</option>
                    <option class="featureCellInput" :value="false">false</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="cornerTitle"></a>cornerTitle</td>
                <td class="featureCell">Decide the inner text of the corner title</td>
                <td class="featureCell">String</td>
                <td class="featureCell">''</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.cornerTitle" @blur="textFit($event,'cornerTitle')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="isAllowResize"></a>isAllowResize</td>
                <td class="featureCell">Decide whether to allow resize the cellWidth or cellHeight by mouse move</td>
                <td class="featureCell">Boolean</td>
                <td class="featureCell">true</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell">
                  <select class="featureCellSelect" v-model="propValues.isAllowResize" :disabled="propValues.isActive" size="2">
                    <option class="featureCellInput" :value="true">true</option>
                    <option class="featureCellInput" :value="false">false</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="colTitleHeight"></a>colTitleHeight</td>
                <td class="featureCell">Decide the height(px) of row titles</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">30</td>
                <td class="featureCell">Integer & >=0</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.colTitleHeight" @focus="tempRecord($event,'colTitleHeight')" @blur="IntegerFit($event,'colTitleHeight',-1)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="rowTitleWidth"></a>rowTitleWidth</td>
                <td class="featureCell">Decide the width(px) of column titles</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">40</td>
                <td class="featureCell">Integer & >=0</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.rowTitleWidth" @focus="tempRecord($event,'rowTitleWidth')" @blur="IntegerFit($event,'rowTitleWidth',-1)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="chosingColor"></a>chosingColor</td>
                <td class="featureCell">Decide the color of chosing border</td>
                <td class="featureCell">Color(String)</td>
                <td class="featureCell">'#107415'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.chosingColor" @blur="textFit($event,'chosingColor')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="fontColor"></a>fontColor</td>
                <td class="featureCell">Decide the color of chosing border</td>
                <td class="featureCell">Color(String)</td>
                <td class="featureCell">'#107415'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.fontColor" @blur="textFit($event,'fontColor')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="borderDefaultColor"></a>borderDefaultColor</td>
                <td class="featureCell">Decide the color of default border color</td>
                <td class="featureCell">Color(String)</td>
                <td class="featureCell">'#DDD'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.borderDefaultColor" @blur="textFit($event,'borderDefaultColor')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="borderDeepDefaultColor"></a>borderDeepDefaultColor</td>
                <td class="featureCell">Decide the color of default border color of titles</td>
                <td class="featureCell">Color(String)</td>
                <td class="featureCell">'#CCC'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.borderDeepDefaultColor" @blur="textFit($event,'borderDeepDefaultColor')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="titleColor"></a>titleColor</td>
                <td class="featureCell">Decide the color of titles</td>
                <td class="featureCell">Color(String)</td>
                <td class="featureCell">'#F1F1F1'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.titleColor" @blur="textFit($event,'titleColor')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="titleHovingColor"></a>titleHovingColor</td>
                <td class="featureCell">Decide the color of hoving titles</td>
                <td class="featureCell">Color(String)</td>
                <td class="featureCell">'rgb(160, 230, 160)'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.titleHovingColor" @blur="textFit($event,'titleHovingColor')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="titleChoosingColor"></a>titleChoosingColor</td>
                <td class="featureCell">Decide the color of choosing titles</td>
                <td class="featureCell">Color(String)</td>
                <td class="featureCell">'rgb(200, 240, 200)'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.titleChoosingColor" @blur="textFit($event,'titleChoosingColor')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="disabledAreaColor"></a>disabledAreaColor</td>
                <td class="featureCell">Decide the color of disabled area</td>
                <td class="featureCell">Color(String)</td>
                <td class="featureCell">'#F1F1F1'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.disabledAreaColor" @blur="textFit($event,'disabledAreaColor')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="tempSaveLength"></a>tempSaveLength</td>
                <td class="featureCell">Maximum cache to store undo operations</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">300</td>
                <td class="featureCell">Integer & >=100</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.tempSaveLength" @focus="tempRecord($event,'tempSaveLength')" @blur="IntegerFit($event,'tempSaveLength',0)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="frozenZoneX"></a>frozenZoneX</td>
                <td class="featureCell">X coordinate of frozen pane (-1 means unfrozen)</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">-1</td>
                <td class="featureCell">Integer & >=-1</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.frozenZoneX" @focus="tempRecord($event,'frozenZoneX')" @blur="IntegerFit($event,'frozenZoneX',-2)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="frozenZoneY"></a>frozenZoneY</td>
                <td class="featureCell">Y coordinate of frozen pane (-1 means unfrozen)</td>
                <td class="featureCell">Number</td>
                <td class="featureCell">-1</td>
                <td class="featureCell">Integer & >=-1</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.frozenZoneY" @focus="tempRecord($event,'frozenZoneY')" @blur="IntegerFit($event,'frozenZoneY',-2)"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="cellDataType"></a>cellDataType</td>
                <td class="featureCell">Decide the type of the cell value</td>
                <td class="featureCell">Array</td>
                <td class="featureCell">[...[...'String']]</td>
                <td class="featureCell">[...[...'String'/'Number'/'Boolean']]</td>
                <td class="featureCell">No</td>
                <td class="featureCell">
                  <div :class="{myButton:!propValues.isActive,myButtonDisable:propValues.isActive}" @click="tableArrayModal('cellDataType','cellDataType')">Change it</div>
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="isNumberOnly"></a>isNumberOnly</td>
                <td class="featureCell">Decide whether user can input only numbers</td>
                <td class="featureCell">Boolean</td>
                <td class="featureCell">false</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell">
                  <select @change="refreshVueSpreadsheets" class="featureCellSelect" v-model="propValues.isNumberOnly" :disabled="propValues.isActive" size="2">
                    <option class="featureCellInput" :value="true">true</option>
                    <option class="featureCellInput" :value="false">false</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="isPattOnly"></a>isPattOnly</td>
                <td class="featureCell">Make users to input only what has been confirmed by regular expressions</td>
                <td class="featureCell">String or Array</td>
                <td class="featureCell">''</td>
                <td class="featureCell">String for new RegExp(str)</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><div>String:</div>' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.isPattOnly" @blur="textFit($event,'isPattOnly')"> '<br><div>Array:</div><div :class="{myButton:!propValues.isActive,myButtonDisable:propValues.isActive}" @click="tableArrayModal('isPattOnly','tableValue')">Change it</div></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="isInputSelect"></a>isInputSelect</td>
                <td class="featureCell">Make users to input from a value list</td>
                <td class="featureCell">Array</td>
                <td class="featureCell">[...[...{isSelect: false,value: []}]]</td>
                <td class="featureCell">[...[...{isSelect: false/true,value: [...string]}]]</td>
                <td class="featureCell">No</td>
                <td class="featureCell"></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="msgAlertSubstitution"></a>msgAlertSubstitution</td>
                <td class="featureCell">Decide the message shows when data RegExp validation fails</td>
                <td class="featureCell">String</td>
                <td class="featureCell">'Your input is wrong'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell">' <input class="featureCellInput" :disabled="propValues.isActive" type="text" :value="propValues.msgAlertSubstitution" @blur="textFit($event,'msgAlertSubstitution')"> '</td>
              </tr>
              <tr>
                <td class="featureCell"><a name="local"></a>local</td>
                <td class="featureCell">Decide the language</td>
                <td class="featureCell">String</td>
                <td class="featureCell">'English'</td>
                <td class="featureCell">'English' or 'Chinese'</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell">
                  <select class="featureCellSelect" v-model="propValues.local" :disabled="propValues.isActive" size="2">
                    <option class="featureCellInput" :value="'English'">'English'</option>
                    <option class="featureCellInput" :value="'Chinese'">'Chinese'</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="rowsShow"></a>rowsShow</td>
                <td class="featureCell">Decide whether rows show</td>
                <td class="featureCell">Array</td>
                <td class="featureCell">[...true]</td>
                <td class="featureCell">[...true/false]</td>
                <td class="featureCell">No</td>
                <td class="featureCell">
                  [<div v-for="n of Math.max(propValues.rows,propValues.maxRows)" :key="n+'0'">[
                    <input class="featureCellInput" :disabled="propValues.isActive||(n!=1 && propValues.rowsShow[n-2]==undefined)" type="text" :value="propValues.rowsShow[n - 1]" @blur="arrayTextFit($event,'rowsShow',n-1)">  
                  ]{{n==propValues.rows?'':','}}</div>]
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="colsShow"></a>colsShow</td>
                <td class="featureCell">Decide whether columns show</td>
                <td class="featureCell">Array</td>
                <td class="featureCell">[...true]</td>
                <td class="featureCell">[...true/false]</td>
                <td class="featureCell">No</td>
                <td class="featureCell">
                  [<div v-for="n of Math.max(propValues.cols,propValues.maxCols)" :key="n+'9'">[
                    <input class="featureCellInput" :disabled="propValues.isActive||(n!=1 && propValues.colsShow[n-2]==undefined)" type="text" :value="propValues.colsShow[n - 1]" @blur="arrayTextFit($event,'colsShow',n-1)">  
                  ]{{n==propValues.rows?'':','}}</div>]
                </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="tableValue"></a>tableValue</td>
                <td class="featureCell">Initial value of table</td>
                <td class="featureCell">Two-dimensional array</td>
                <td class="featureCell">[...[...'']]</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><div :class="{myButton:!propValues.isActive,myButtonDisable:propValues.isActive}" @click="tableArrayModal('tableValue','tableValue')">Change it</div></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="tableValueToFixed"></a>tableValueToFixed</td>
                <td class="featureCell">Decide the places of decimal</td>
                <td class="featureCell">Two-dimensional array</td>
                <td class="featureCell">[...[...'']]</td>
                <td class="featureCell">[...[...Number]]</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><div :class="{myButton:!propValues.isActive,myButtonDisable:propValues.isActive}" @click="tableArrayModal('tableValueToFixed','tableValue')">Change it</div></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="tableValueNumberType"></a>tableValueNumberType</td>
                <td class="featureCell">Decide the display format of numbers</td>
                <td class="featureCell">Two-dimensional array</td>
                <td class="featureCell">[...[...'']]</td>
                <td class="featureCell">[...[...'%'/','/'% ,']]</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><div :class="{myButton:!propValues.isActive,myButtonDisable:propValues.isActive}" @click="tableArrayModal('tableValueNumberType','tableValue')">Change it</div></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="tableValuePrefix"></a>tableValuePrefix</td>
                <td class="featureCell">Decide the prefix of each cell</td>
                <td class="featureCell">Two-dimensional array</td>
                <td class="featureCell">[...[...'']]</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><div :class="{myButton:!propValues.isActive,myButtonDisable:propValues.isActive}" @click="tableArrayModal('tableValuePrefix','tableValue')">Change it</div></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="tableValuePostfix"></a>tableValuePostfix</td>
                <td class="featureCell">Decide the postfix of each cell</td>
                <td class="featureCell">Two-dimensional array</td>
                <td class="featureCell">[...[...'']]</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><div :class="{myButton:!propValues.isActive,myButtonDisable:propValues.isActive}" @click="tableArrayModal('tableValuePostfix','tableValue')">Change it</div></td>
              </tr>
              <tr>
                <td class="featureCell"><a name="tableValueModifyStringify"></a>tableValueModifyStringify</td>
                <td class="featureCell">Modify value of table</td>
                <td class="featureCell">JSON.stringify([...[...]])</td>
                <td class="featureCell">'[[]]'</td>
                <td class="featureCell">Depends</td>
                <td class="featureCell">Yes</td>
                <td class="featureCell">
                  <div :class="{myButton:!propValues.isActive,myButtonDisable:propValues.isActive}" @click="tableArrayModal('tableValueModifyStringify','tableValueN')">Change the array</div>
                  <div>value(str) props:</div>
                  <div>'{{strTableValueModifyStringify}}'</div>
                  </td>
              </tr>
              <tr>
                <td class="featureCell"><a name="disabledTableValue"></a>disabledTableValue</td>
                <td class="featureCell">Initial disable status of table</td>
                <td class="featureCell">Two-dimensional array</td>
                <td class="featureCell">[...[...false]]</td>
                <td class="featureCell">[...[...true or 'true' or '1'\false or 'false' or '0' or '']]</td>
                <td class="featureCell">No</td>
                <td class="featureCell"><div :class="{myButton:!propValues.isActive,myButtonDisable:propValues.isActive}" @click="tableArrayModal('disabledTableValue','boolean')">Change it</div></td>
              </tr>
            </table>
          </div>

        </div>
        

        <hr>
        <!-- Event -->
        <div class="paddings"><a name="Event"></a><h3>Event</h3></div>
        <div class="paddings">The only event provided is <span class="importantMsg">'changeFunc'</span>.</div>
        <div class="paddings"><span class="importantMsg">'change($event)'</span> can help you to get the value from the vue-spreadsheets component when value changes.</div>
        <div class="paddings">Example can be found in <span class="importantLink" @click="hrefTo('Code')">Code</span>.</div>
        <hr>
        <!-- Code -->
        <div class="paddings"><a name="Code"></a><h3>Code</h3></div>
        <div class="paddings">The following code is generated <span class="importantMsg">dynamically</span> by the <span class="importantLink" @click="hrefTo('Props')">Props</span> you changed.</div>
        <div class="paddings" v-show="!isMobile">The active status: <span :class="{importantMsg:propValues.isActive}">{{propValues.isActive?'':'not '}}<b>active</b></span>.</div>
        <div class="paddings" v-show="propValues.isActive&&!isMobile"><span class="importantMsg">Warning</span>: the vue-spreadsheets view page is now listen the keydown event.</div>
        <div class="paddings" v-show="propValues.isActive&&!isMobile"><span class="importantLink" @click="boolChange('isActive')">Click here</span> to change the active status.</div>
        <div class="paddings" v-show="propValues.isActive&&!isMobile">When the vue-spreadsheets view page is listening the keydown event, please do not use Ctrl + C to copy the code directly.</div>
        <div class="paddings" v-show="propValues.isActive&&!isMobile">Instead, you should use the right mouse button to open the context menu to execute the copy command.</div>
        <div class="codeAreaBox" :style="{margin:isMobile?0:'10px'}">
          <code class="codeArea" :class="{codeAreaMobile:isMobile,codeAreaDeskTop:!isMobile}">
            <div><span class="codeTagSign">&lt;</span><span class="codeTag">template</span><span class="codeTagSign">&gt;</span></div>
            <div><pre>&nbsp;</pre><span class="codeTagSign">&lt;</span><span class="codeTag">div </span><span class="codeVariable">id</span>=<span class="codeAttribute">"app"</span><span class="codeTagSign">&gt;</span></div>
            <div><pre>&nbsp;&nbsp;</pre><span class="codeTagSign">&lt;</span><span class="codeTag">vue-spreadsheets<pre>&nbsp;</pre></span></div>
            <div v-for="(val,key,index) in propValues" :key="index+'a'" v-show="isPropValuesShow[key]">
              <span>
                <pre>&nbsp;&nbsp;&nbsp;</pre>:<span class="codeVariable">{{key}}</span>="<span class="codeVariable">{{key}}</span>"
              </span>
            </div>
            <div><pre>&nbsp;&nbsp;&nbsp;</pre>@<span class="codeVariable">changeFunc</span>="<span class="codeFunction">getTableFunc</span>(<span class="codeVariable">$event</span>)"</div>
            <div><pre>&nbsp;&nbsp;&nbsp;</pre>@<span class="codeVariable">changeVal</span>="<span class="codeFunction">getTableValue</span>(<span class="codeVariable">$event</span>)"</div>
            <div><pre>&nbsp;&nbsp;</pre><span class="codeTagSign">&#47;&gt;</span></div>
            <div><pre>&nbsp;&nbsp;</pre><span class="codeTagSign">&lt;<span class="codeTag">br</span>&gt;</span></div>
            <div><pre>&nbsp;&nbsp;</pre><span class="codeTagSign">&lt;<span class="codeTag">div</span>&gt;</span>tableValueFuncGet:<span class="codeTagSign">&lt;<span class="codeTag">br</span>&gt;</span><span v-text="'{{tableValueFuncGet}}'"></span><span class="codeTagSign">&lt;&#47;<span class="codeTag">div</span>&gt;</span></div>
            <div><pre>&nbsp;&nbsp;</pre><span class="codeTagSign">&lt;<span class="codeTag">hr</span>&gt;</span></div>
            <div><pre>&nbsp;&nbsp;</pre><span class="codeTagSign">&lt;<span class="codeTag">div</span>&gt;</span>tableValueGet:<span class="codeTagSign">&lt;<span class="codeTag">br</span>&gt;</span><span v-text="'{{tableValueGet}}'"></span><span class="codeTagSign">&lt;&#47;<span class="codeTag">div</span>&gt;</span></div>


            <div><pre>&nbsp;</pre><span class="codeTagSign">&lt;&#47;</span><span class="codeTag">div</span><span class="codeTagSign">&gt;</span></div>
            <div><span class="codeTagSign">&lt;&#47;</span><span class="codeTag">template</span><span class="codeTagSign">&gt;</span></div>
            <br>
            <div><span class="codeTagSign">&lt;</span><span class="codeTag">script</span><span class="codeTagSign">&gt;</span></div>
            <div><span class="codeKeyword">export default</span> {</div>
            <div><pre>&nbsp;</pre><span class="codeVariable">name: </span><span class="codeAttribute">'app'</span>,</div>
            <div><pre>&nbsp;</pre><span class="codeFunction">data</span>() {</div>
            <div><pre>&nbsp;&nbsp;</pre><span class="codeKeyword">return</span> {</div>
            <div v-for="(val,key,index) in propValues" :key="index+'b'" v-show="isPropValuesShow[key]">
              <span>
                <pre>&nbsp;&nbsp;&nbsp;</pre>
                <span class="codeVariable">{{key}}: </span>
                <span :class="{codeNumber:!isNaN(val)&&!typeof(val)=='boolean',codeTag:typeof(val)=='boolean',codeDefault:Array.isArray(val),codeAttribute:typeof(val)=='string'}" v-show="key != 'tableValueModifyStringify'">
                  {{typeof(val)=="string"?"'":""}}{{val}}{{typeof(val)=="string"?"'":""}}
                </span>
                <span class="codeAttribute" v-show="key == 'tableValueModifyStringify'">'{{strTableValueModifyStringify}}'</span>,
              </span>
            </div>
            <div><pre>&nbsp;&nbsp;&nbsp;</pre><span class="codeVariable">tableValueFuncGet: </span>[ [] ], <span class="codeComment">//functions get from vue-spreadsheets</span></div>
            <div><pre>&nbsp;&nbsp;&nbsp;</pre><span class="codeVariable">tableValueGet: </span>[ [] ] <span class="codeComment">//values get from vue-spreadsheets</span></div>
            <div><pre>&nbsp;&nbsp;</pre>}</div>
            <div><pre>&nbsp;</pre>},</div>
            <div><pre>&nbsp;</pre><span class="codeVariable">methods: </span>{</div>
            <div><pre>&nbsp;&nbsp;</pre><span class="codeFunction">getTableFunc</span>(<span class="codeVariable">e</span>) {</div>

            <div><pre>&nbsp;&nbsp;&nbsp;</pre><span class="codeTag">this</span>.<span class="codeVariable">tableValueFuncGet</span> = <span class="codeVariable">e</span></div>
            <div><pre>&nbsp;&nbsp;</pre>},</div>

            <div><pre>&nbsp;&nbsp;</pre><span class="codeFunction">getTableValue</span>(<span class="codeVariable">e</span>) {</div>

            <div><pre>&nbsp;&nbsp;&nbsp;</pre><span class="codeTag">this</span>.<span class="codeVariable">tableValueGet</span> = <span class="codeVariable">e</span></div>
            <div><pre>&nbsp;&nbsp;</pre>}</div>
            <div><pre>&nbsp;</pre>}</div>

            <div>}</div>

            <div><span class="codeTagSign">&lt;&#47;</span><span class="codeTag">script</span><span class="codeTagSign">&gt;</span></div>
          </code>
        </div>
        <hr>
        <!-- View -->
        <div class="paddings"><a name="View"></a><h3>View</h3></div>
        <div class="paddings" v-show="!isMobile">The active status: <span :class="{importantMsg:!propValues.isActive}">{{propValues.isActive?'':'not '}}<b>active</b></span>.</div>
        <div class="paddings" v-show="!propValues.isActive&&!isMobile"><span class="importantLink" @click="boolChange('isActive')">Click here</span> to change the active status.</div>

        <div class="paddings">
          <vue-spreadsheets 
            :rows="propValues.rows"
            :maxRows="propValues.maxRows" 
            :cols="propValues.cols"
            :maxCols="propValues.maxCols"
            :tableWidth="propValues.tableWidth"
            :tableHeight="propValues.tableHeight"
            :cellWidth="propValues.cellWidth"
            :cellWidthMin="propValues.cellWidthMin"
            :isAllowResize="propValues.isAllowResize"
            :cellHeight="propValues.cellHeight"
            :cellHeightMin="propValues.cellHeightMin"
            :colTitleHeight="propValues.colTitleHeight"
            :rowTitleWidth="propValues.rowTitleWidth"
            :chosingColor="propValues.chosingColor"
            :fontColor="propValues.fontColor"
            :borderDefaultColor="propValues.borderDefaultColor"
            :borderDeepDefaultColor="propValues.borderDeepDefaultColor"
            :titleColor="propValues.titleColor"
            :titleHovingColor="propValues.titleHovingColor"
            :titleChoosingColor="propValues.titleChoosingColor"
            :disabledAreaColor="propValues.disabledAreaColor"
            :tempSaveLength="propValues.tempSaveLength"
            :isColsTitleShow="propValues.isColsTitleShow"
            :colsTitles="propValues.colsTitles"
            :isRowsTitleShow="propValues.isColsTitleShow"
            :rowsTitles="propValues.rowsTitles"
            :isTextareaShow="propValues.isTextareaShow"
            :cornerTitle="propValues.cornerTitle"
            :frozenZoneX="propValues.frozenZoneX"
            :frozenZoneY="propValues.frozenZoneY"
            :rowsShow="propValues.rowsShow"
            :colsShow="propValues.colsShow"
            :local="propValues.local"
            :cellDataType="propValues.cellDataType"
            :isNumberOnly="propValues.isNumberOnly"
            :isPattOnly="propValues.isPattOnly"
            :isInputSelect="propValues.isInputSelect"
            :msgAlertSubstitution="propValues.msgAlertSubstitution"
            :isActive="propValues.isActive"
            :tableValue="propValues.tableValue"
            :tableValueToFixed="propValues.tableValueToFixed"
            :tableValueNumberType="propValues.tableValueNumberType"
            :tableValuePrefix="propValues.tableValuePrefix"
            :tableValuePostfix="propValues.tableValuePostfix"
            :tableValueModifyStringify="strTableValueModifyStringify"
            :disabledTableValue="propValues.disabledTableValue"
            @changeFunc="getTableFunc($event)"
            @changeVal="getTableVal($event)"
            :key="vueSpreadsheetsKey"
          />
          <hr>
          tableValueFuncGet:<br>{{tableValue}}
          <hr>
          tableValueGet<br>{{tableValueValue}}
        </div>
      </div>
      <!-- Modal -->
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="myModal" v-show="isMyModal">
            <div class="myModalContent">
              <div class="myModalShadeHead"><h3 style="padding:0;margin:0;display:block">{{modalHead}}</h3><div class="modalLink" style="transform:scale(1.2,1)" @click="closeMyModal">X</div></div>
              <hr style="opacity:0.5">
              <div class="myModalShadeContent">
                [
                <table class="myModalTable">
                  <tr v-for="i of Math.max(propValues.rows,propValues.maxRows)" :key="i+'p'">
                    <td v-for="j of Math.max(propValues.cols,propValues.maxCols)" :key="j+'h'">
                      <div style="display:flex">
                      <div>{{j==1?'[':''}}</div>
                      <input v-show="modalType=='tableValue'||modalType=='tableValueN'" type="text" style="width:50px" :value="msgArrayComplete[i-1][j-1]" @blur="msgArrayChange($event,i-1,j-1,modalType)">
                      <select v-show="modalType=='boolean'" style="width:50px;" @change="msgArrayChange($event,i-1,j-1,modalType)" v-model="msgArrayComplete[i-1][j-1]" size="2">
                        <option :value="true">true</option>
                        <option :value="false">false</option>
                      </select>
                      <select v-show="modalType=='cellDataType'" style="width:50px;" @change="msgArrayChange($event,i-1,j-1,modalType)" v-model="msgArrayComplete[i-1][j-1]" size="3">
                        <option :value="'String'">String</option>
                        <option :value="'Number'">Number</option>
                        <option :value="'Boolean'">Boolean</option>
                      </select>
                      <div>{{j==Math.max(propValues.cols,propValues.maxCols)?']':''}}{{i==Math.max(propValues.rows,propValues.maxRows)&&j==Math.max(propValues.cols,propValues.maxCols)?'':','}}</div>
                      </div>
                    </td>
                  </tr>
                </table>
                ]
              </div>
              <div class="myModalShadeBottom">
                <div class="myModalButton" @click="closeMyModal">Close</div>
              </div>
            </div>
            <div class="myModalShade" @click="closeMyModal"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {

      propValues:{
        isActive: true,
        rows: 10,
        maxRows: 0,
        cols: 5,
        maxCols: 0,
        tableWidth: 600,
        tableHeight: 400,
        isColsTitleShow: true,
        colsTitles:[],
        cellWidth:[],
        cellWidthMin:30,
        isRowsTitleShow: true,
        rowsTitles: [],
        cellHeight: [],
        cellHeightMin:30,
        isTextareaShow: true,
        cornerTitle:'',
        isAllowResize:true,
        colTitleHeight:30,
        rowTitleWidth:40,
        chosingColor: '#107415',
        fontColor: '#2c3e50',
        borderDefaultColor: '#DDD',
        borderDeepDefaultColor: '#CCC',
        titleColor: '#F1F1F1',
        titleHovingColor: 'rgb(160, 230, 160)',
        titleChoosingColor: 'rgb(200, 240, 200)',
        disabledAreaColor: '#F1F1F1',
        tempSaveLength: 300,
        frozenZoneX:-1,
        frozenZoneY:-1,
        rowsShow: [],
        colsShow: [],
        local: 'English',
        cellDataType:[
          ['Number','Number','Number','Number'],
          ['Number','Number','Number'],
          ['Number']
        ],
        isNumberOnly: false,
        isPattOnly: '',
        isInputSelect: [[{
          isSelect: true,
          value: ['1','2','3']
        }]],
        msgAlertSubstitution: '',
        tableValue:[
          [1,'=A1','=b1','=SUM(A1:B2)+C1+$A$1+b$1+B1'],
          [2,'=1/25','=100*1000'],
          [3],
          ['="A1"']
        ],
        tableValueToFixed:[
          [],
          ["",4]
        ],
        tableValueNumberType:[
          [],
          ["","%",","]
        ],
        tableValuePrefix:[
          [],
          ["","± $ "]
        ],
        tableValuePostfix:[
          [],
          ["",""," RMB"]
        ],
        tableValueModifyStringify:[[]],
        disabledTableValue:[
          [0,0,0,1]
        ]
      },

      propValuesDefault:{
        isActive: true,
        rows: 10,
        maxRows: 0,
        cols: 5,
        maxCols: 0,
        tableWidth: 600,
        tableHeight: 400,
        isColsTitleShow: true,
        colsTitles:[],
        cellWidth:[],
        cellWidthMin:30,
        isRowsTitleShow: true,
        rowsTitles: [],
        cellHeight: [],
        cellHeightMin:30,
        isTextareaShow: true,
        cornerTitle:'',
        isAllowResize:true,
        colTitleHeight:30,
        rowTitleWidth:40,
        chosingColor: '#107415',
        fontColor: '#2c3e50',
        borderDefaultColor: '#DDD',
        borderDeepDefaultColor: '#CCC',
        titleColor: '#F1F1F1',
        titleHovingColor: 'rgb(160, 230, 160)',
        titleChoosingColor: 'rgb(200, 240, 200)',
        disabledAreaColor: '#F1F1F1',
        tempSaveLength: 300,
        frozenZoneX:-1,
        frozenZoneY:-1,
        rowsShow: [],
        colsShow: [],
        local: 'English',
        cellDataType:[[]],
        isNumberOnly: false,
        isPattOnly: '',
        isInputSelect: [[{
          isSelect: false,
          value: []
        }]],
        msgAlertSubstitution: '',
        tableValue:[[]],
        tableValueToFixed:[[]],
        tableValueNumberType:[[]],
        tableValuePrefix:[[]],
        tableValuePostfix:[[]],
        tableValueModifyStringify:[[]],
        disabledTableValue:[[]]
      },

      propValuesTemp:{
        isActive: true,
        rows: 10,
        maxRows: 0,
        cols: 5,
        maxCols: 0,
        tableWidth: 600,
        tableHeight: 400,
        isColsTitleShow: true,
        colsTitles:[],
        cellWidth:[],
        cellWidthMin:30,
        isRowsTitleShow: true,
        rowsTitles: [],
        cellHeight: [],
        cellHeightMin:30,
        isTextareaShow: true,
        cornerTitle:'',
        isAllowResize:true,
        colTitleHeight:30,
        rowTitleWidth:40,
        chosingColor: '#107415',
        fontColor: '#2c3e50',
        borderDefaultColor: '#DDD',
        borderDeepDefaultColor: '#CCC',
        titleColor: '#F1F1F1',
        titleHovingColor: 'rgb(160, 230, 160)',
        titleChoosingColor: 'rgb(200, 240, 200)',
        disabledAreaColor: '#F1F1F1',
        tempSaveLength: 300,
        frozenZoneX:-1,
        frozenZoneY:-1,
        rowsShow: [],
        colsShow: [],
        local: 'English',
        cellDataType:[[]],
        isNumberOnly: false,
        isPattOnly: '',
        isInputSelect: [[{
          isSelect: false,
          value: []
        }]],
        msgAlertSubstitution: '',
        tableValue:[[]],
        tableValueToFixed:[[]],
        tableValueNumberType:[[]],
        tableValuePrefix:[[]],
        tableValuePostfix:[[]],
        tableValueModifyStringify:[[]],
        disabledTableValue:[[]]
      },

      tableValue: [[]],
      tableValueValue: [[]],
      vueSpreadsheetsKey: 0,
      leftWidth:260,
      isShowProps: false,
      isMobile: false,
      isMyModal: false,
      modalHead: '',
      modalType:'',
      msgArray: [[]]
    }
  },
  computed: {
    isPropValuesShow() {
      let temp = {}
      for (let key in this.propValues) {
        temp[key] = this.propValues[key]!=this.propValuesDefault[key] && (Array.isArray(this.propValues[key])?(this.propValues[key]==false?false:true):true) && JSON.stringify(this.propValues[key]) != JSON.stringify(this.propValuesDefault[key]);
      }
      return temp;
    },
    isPropValuesNumber() {
      let temp = {}
      for (let key in this.isPropValuesShow) {
        if (this.isPropValuesShow[key]) {
          temp[key] = this.isPropValuesShow[key];
        }
      }
      return temp;
    },
    msgArrayComplete() {
      let temp =[];
      for (let i = 0; i < Math.max(this.propValues.rows,this.propValues.maxRows); i++) {
        temp[i] = [];
        for (let j = 0; j < Math.max(this.propValues.cols,this.propValues.maxCols); j++) {
          temp[i][j] = '';
        }
      }
      for (let i = 0; i < this.msgArray.length; i++) {
        for (let j = 0; j < this.msgArray[i].length; j++) {
          temp[i][j] = this.msgArray[i][j];
        }
      }
      return temp;
    },
    strTableValueModifyStringify() {
      return JSON.stringify(this.propValues.tableValueModifyStringify);
    }
  },
  methods: {
    getTableFunc(e) {
      this.tableValue = e;
    },
    getTableVal(e) {
      this.tableValueValue = e;
    },
    hrefTo(str) {
      let url = '#' + str
      window.location.href = url;
    },
    IntegerFit(e,key,minNum) {
      if (e.target.value == '' || parseInt(e.target.value) <= minNum) {
        e.target.value = parseInt(this.propValuesTemp[key]);
      } else {
        this.propValues[key] = parseInt(e.target.value);
        this.vueSpreadsheetsKey++;
      }
    },
    textFit(e,key,para) {
        para = para || 'y';
        this.propValues[key] = e.target.value;
        if (para != 'n') this.vueSpreadsheetsKey++;
    },
    arrayNumberFit(e,key,index) {
      if (isNaN(e.target.value) || parseFloat(e.target.value) <= 0) {
        e.target.value = '';
        this.vueSpreadsheetsKey++;
      } else {
        this.$set(this.propValues[key],index,parseFloat(e.target.value) || 0);
        this.vueSpreadsheetsKey++;
      }
    },
    arrayTextFit(e,key,index) {
        this.$set(this.propValues[key],index,e.target.value);
        this.vueSpreadsheetsKey++;
    },
    refreshVueSpreadsheets() {
        this.vueSpreadsheetsKey++;
    },
    boolChange(key) {
      this.propValues[key] = !this.propValues[key];
    },
    tempRecord(e,key) {
      this.propValuesTemp[key] = e.target.value;
    },
    isShowPropsMethod() {
      this.isShowProps = !this.isShowProps;
    },
    isMobileMethod(){
      if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      }
      return false;
    },
    closeMyModal() {
      this.isMyModal = false;
    },
    tableArrayModal(head,type) {
      if (!this.propValues.isActive) {
        this.modalHead = head;
        this.modalType = type;
        if (Array.isArray(this.propValues[head])) {
          this.msgArray = this.propValues[head].slice(0);
        } else {
          this.msgArray = [[]];
        }
        this.isMyModal = true;
      }
    },
    msgArrayChange(e,i,j,type) {
      this.msgArray = this.msgArrayComplete.slice(0);
      if (type === "tableValue" || type === "tableValueN") {
        if (this.isNumberOnly) {
          this.$set(this.msgArray[i],j,+e.target.value||'');
        } else {
          this.$set(this.msgArray[i],j,e.target.value);
        }
      } else if (type === "boolean") {
        if (e.target.value == 'false' || e.target.value == false) {
          this.$set(this.msgArray[i],j,false);
        } else {
          this.$set(this.msgArray[i],j,true);
        }
      } else {
        this.$set(this.msgArray[i],j,e.target.value);
      }
      this.propValues[this.modalHead] = this.msgArray.slice(0);
      if (type!=="tableValueN") this.vueSpreadsheetsKey++;
    }
  },
  created() {
    this.url = window.location.href;
    this.isMobile = this.isMobileMethod();
  },
  mounted() {
    this.hrefTo('View');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {margin:0;padding: 0;overflow-X:hidden;}
.codeAreaBox {background-color:rgb(30,30,30);padding: 10px;width:700px;}
.codeArea {font-family:Consolas, 'Courier New', monospace;color:rgb(212,212,212);font-size:14px;}
.codeArea div {padding-bottom:4px;}
.codeAreaDesktop >* {white-space:nowrap;}
.codeAreaMobile >* {white-space:normal;}
.codeArea pre {display: inline;}
.codeFunction {color:rgb(220,220,170)}
.codeKeyword {color:rgb(197,134,192)}
.codeVariable {color:rgb(156,220,254)}
.codeTagSign {color:rgb(128,128,128)}
.codeTag {color:rgb(86,156,214)}
.codeAttribute {color:rgb(206,145,120)}
.codeNumber {color:rgb(181,206,168)}
.codeComment {color:rgb(106,153,85)}
.codeDefault {color:rgb(212,212,212)}
.importantMsg {color: #d63200;font-weight: bold;}
.importantLink {color: #42b983;font-weight: bold;text-decoration:underline;}
.importantLink:hover {color: #61d6a2;cursor: pointer;}
.paddings {padding:10px}
.paddings2 {padding:10px 10px 10px 20px;}
.featureTable {text-align:left;border-collapse: collapse; border-spacing: 0;width: 100%;}
.featureTable .featureCell {border:1px solid #CCC; height: 40px; line-height: 20px;padding:10px;}
.featureCellInput {width:120px}
.featureCellSelect {-webkit-appearance:none;-moz-appearance:none;appearance:none;}

.myModal {position:fixed;top:0;left:0;width:100%;height:100%;z-index:1001;}
.myModalContent {position:fixed;top:50px;left:calc(50% - 400px);width:800px;height:600px;background-color:white;border:1px solid #ebeef5;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);border-radius:6px; z-index:11}
.myModalShadeHead {display:flex;justify-content:space-between;padding:20px;}
.myModalShadeContent {padding:20px;width:760px;height:400px;overflow:scroll;}
.myModalShadeBottom {display:flex;justify-content:flex-end;padding:20px;}
.myModalShade {position:fixed;top:0;left:0;width:100%;height:100%;background-color:gray;opacity:0.3;z-index:10}
.myModalButton {margin-right:30px;padding:9px;color:white;background-color:#42b983;border-radius:4px;text-align:center;}
.myModalButton:hover {background-color:#61d6a2;cursor: pointer;}


.myButton {padding:9px;color:white;background-color:#42b983;border-radius:4px;text-align:center;}
.myButton:hover {background-color:#61d6a2;cursor: pointer;}
.myButtonDisable {padding:9px;color:white;background-color:gray;border-radius:4px;text-align:center;}

.leftLink:hover {color: #42b983;cursor: pointer;text-decoration:underline;}
.modalLink:hover {color: #42b983;cursor: pointer;}
.leftContentDesktop {position:fixed;background-color:white;top:0;left:0;overflow-Y:scroll;overflow-X:hidden;z-index:10;height:100%;}

.triangleDown {margin-top:7px;width: 0;height: 0;border-width: 5px;border-style: solid;border-color:#2c3e50 white white white;}
.triangleDown:hover {border-color:#42b983 white white white;cursor: pointer;}
.triangleUp {margin-top:2px;margin-left:-20px;width: 0;height: 0;border-width: 5px;border-style: solid;border-color:white white #2c3e50 white;}
.triangleUp:hover {border-color:white white #42b983 white;cursor: pointer;}
.trianglHover:hover > .triangleDown {border-color:#42b983 white white white;cursor: pointer;}
.trianglHover:hover > .triangleUp {border-color:white white #42b983 white;cursor: pointer;}
.trianglHover:hover {cursor: pointer;}

@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}

@-webkit-keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}

.animated {
  -webkit-animation-duration: 400ms;
  animation-duration: 400ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
