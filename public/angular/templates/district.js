<div scrollify=".section">
  <div class="section pink">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center m-b">El diputado de tu distrito es</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-4">
          <div class="picture">
            <div class="img-circle">
              <img ng-src="http://sitl.diputados.gob.mx/LXIII_leg/{{deputy.picture}}"/>
            </div>
            <img  class="party" src="assets/images/pan.png">
          </div>
        </div>
        <div class="col-xs-12 col-sm-8 xs-tx-center sm-p-t">
          <h1>{{deputy.displayName}}</h1>
          <h3 class="text-secondary">{{deputy.state}} - Distrito: {{deputy.district}}</h3>
          <ul class="btn-group">
            <li class="circle-btn"><i class="fa fa-2x fa-twitter"></i></li>
            <li class="circle-btn"><i class="fa fa-2x fa-envelope"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div ui-include="'angular/templates/district/attendance.html'"></div>
  <!-- <div ui-include="'angular/templates/deputy/initiatives.html'"></div>
  <div ui-include="'angular/templates/deputy/votes.html'"></div>
   -->
</div>
