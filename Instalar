Instalación.

Agragar a la base de datos prefijo_users los camppos necesarios. (telefono , cedula , estado , ciudad , fecnac).

Modificar el archivo del formulario de registro para agregar los nuevos campos.

Sitio_en_joomla/components/com_users/models/forms/registration.xml

y agregar los campos:

<?xml version="1.0" encoding="utf-8"?>
<form>
	<fieldset name="default"
		label="COM_USERS_REGISTRATION_DEFAULT_LABEL"
	>

	  <field name="spacer" type="spacer" class="text"
			  label="COM_USERS_REGISTER_REQUIRED"
		  />

	  <field name="name" type="text"
		  description="COM_USERS_REGISTER_NAME_DESC"
		  filter="string"
		  label="COM_USERS_REGISTER_NAME_LABEL"
		  message="COM_USERS_REGISTER_NAME_MESSAGE"
		  required="true"
		  size="30"
	  />

	  <field name="apellido" type="text"
		  description="COM_USERS_REGISTER_APELLIDO_DESC"
		  filter="string"
		  label="COM_USERS_REGISTER_APELLIDO_LABEL"
		  message="COM_USERS_REGISTER_APELLIDO_MESSAGE"
		  required="true"
		  size="30"
	  />
	  
	  <field name="cedula" type="text"
		  description="COM_USERS_DESIRED_CEDULA"
		  filter="username"
		  label="COM_USERS_REGISTER_CEDULA_LABEL"
		  message="COM_USERS_REGISTER_CEDULA_MESSAGE"
		  required="true"
		  size="30"
	  />
	  
	  <field name="username" type="text"
		  class="validate-username"
		  description="COM_USERS_DESIRED_USERNAME"
		  filter="username"
		  label="COM_USERS_REGISTER_USERNAME_LABEL"
		  message="COM_USERS_REGISTER_USERNAME_MESSAGE"
		  required="true"
		  size="30"
		  validate="username"
	  />

          <field name="password1" type="password"
		  autocomplete="off"
		  class="validate-password"
		  description="COM_USERS_REGISTER_PASSWORD2_DESC"
		  filter="raw"
		  label="COM_USERS_REGISTER_PASSWORD1_LABEL"
		  message="COM_USERS_REGISTER_PASSWORD1_MESSAGE"
		  required="true"
		  size="30"
                  
	  />
          
        
	  <field name="password2" type="password"
		  autocomplete="off"
		  class="validate-password"
		  description="COM_USERS_DESIRED_PASSWORD"
		  field="password2"
		  filter="raw"
		  label="COM_USERS_REGISTER_PASSWORD2_LABEL"
		  message="COM_USERS_REGISTER_PASSWORD2_MESSAGE"
		  required="true"
		  size="30"
	  />

	  

	  <field name="email1" type="email"
		  description="COM_USERS_REGISTER_EMAIL1_DESC"
		  field="id"
		  filter="string"
		  label="COM_USERS_REGISTER_EMAIL1_LABEL"
		  message="COM_USERS_REGISTER_EMAIL1_MESSAGE"
		  required="true"
		  size="30"
		  unique="true"
		  validate="email"
	  />

	  <field name="email2" type="email"
		  description="COM_USERS_REGISTER_EMAIL2_DESC"
		  field="email1"
		  filter="string"
		  label="COM_USERS_REGISTER_EMAIL2_LABEL"
		  message="COM_USERS_REGISTER_EMAIL2_MESSAGE"
		  required="true"
		  size="30"
	  />

          <field name="telefono" type="text"
		  description="COM_USERS_REGISTER_PHONE_DESC"
		  filter="string"
		  label="COM_USERS_REGISTER_PHONE_LABEL"
		  message="COM_USERS_REGISTER_PHONE_MESSAGE"
		  required="false"
		  size="30"
	  />
          
	  <field name="fecnac" type="text"
		  class="readonly"
		  label="COM_USERS_REGISTER_FECNAC_LABEL"
		  description="COM_USERS_REGISTER_FECNAC_DESC"
		  size="30"
		  message="COM_USERS_REGISTER_FECNAC_MESSAGE"
		  filter="string"
		  required="true"
		  readonly="true"
	  />
         
        <field name="terminos" type="checkbox"
                  value="" 
                  default="false" 
		  description="Términos y Condiciones"
		  label="Términos y Condiciones"
		  
	  />
         
	  <field name="codpromo" type="hidden"
		  description="COM_USERS_REGISTER_CODPROMO_DESC"
		  filter="string"
		  label="COM_USERS_REGISTER_CODPROMO_LABEL"
		  size="30"
	  />
          
          

	</fieldset>
</form>

Modificar el archivo “profile.xml” en la misma ruta anterior y agregar los nuevos campos.

<?xml version="1.0" encoding="utf-8"?>
<form>
	<fieldset name="core"
		label="COM_USERS_PROFILE_DEFAULT_LABEL">

		<field name="id" type="hidden"
			filter="integer"
		/>

		<field name="username" type="text"
			class="validate-username"
			description="COM_USERS_DESIRED_USERNAME"
			filter="username"
			label="COM_USERS_PROFILE_USERNAME_LABEL"
			message="COM_USERS_PROFILE_USERNAME_MESSAGE"
			required="true"
			size="30"
			validate="username"
		/>

		<field name="name" type="text"
			description="COM_USERS_PROFILE_NAME_DESC"
			filter="string"
			label="COM_USERS_PROFILE_NAME_LABEL"
			message="COM_USERS_PROFILE_NAME_MESSAGE"
			required="true"
			size="30"
		/>

		<field name="apellido" type="text"
			description="COM_USERS_PROFILE_APELLIDO_DESC"
			filter="string"
			label="COM_USERS_PROFILE_APELLIDO_LABEL"
			message="COM_USERS_PROFILE_APELLIDO_MESSAGE"
			required="true"
			size="30"
		/>

		<field name="cedula" type="text"
			readonly="true" 
			description="COM_USERS_DESIRED_CEDULA"
			filter="username"
			label="COM_USERS_PROFILE_CEDULA_LABEL"
			message="COM_USERS_PROFILE_CEDULA_MESSAGE"
			required="true"
			size="30"
			validate="username"
		/>

		<field name="fecnac" type="calendar"
		 	class="readonly"
			label="COM_USERS_REGISTER_FECNAC_LABEL"
			description="COM_USERS_REGISTER_FECNAC_DESC"
			size="30"
			message="COM_USERS_REGISTER_FECNAC_MESSAGE"
			filter="string"
			readonly="true"
			required="true"
		/>
		
		<field name="estado" type="list"
			description="COM_USERS_REGISTER_ESTADO_DESC"
			label="COM_USERS_REGISTER_ESTADO_LABEL"
			message="COM_USERS_REGISTER_ESTADO_MESSAGE"
			required="true">
			<option	value="">COM_USERS_REGISTER_OPTION_SELECT</option>
			<option	value="Amazonas">COM_USERS_REGISTER_ESTADO_OPTION_1</option>
			<option	value="Anzoátegui">COM_USERS_REGISTER_ESTADO_OPTION_2</option>
			<option	value="Apure">COM_USERS_REGISTER_ESTADO_OPTION_3</option>
			<option	value="Aragua">COM_USERS_REGISTER_ESTADO_OPTION_4</option>
			<option	value="Barinas">COM_USERS_REGISTER_ESTADO_OPTION_5</option>
			<option	value="Bolívar">COM_USERS_REGISTER_ESTADO_OPTION_6</option>
			<option	value="Carabobo">COM_USERS_REGISTER_ESTADO_OPTION_7</option>
			<option	value="Cojedes">COM_USERS_REGISTER_ESTADO_OPTION_8</option>
			<option	value="Delta Amacuro">COM_USERS_REGISTER_ESTADO_OPTION_9</option>
			<option	value="Distrito Capital">COM_USERS_REGISTER_ESTADO_OPTION_10</option>
			<option	value="Falcón">COM_USERS_REGISTER_ESTADO_OPTION_11</option>
			<option	value="Guárico">COM_USERS_REGISTER_ESTADO_OPTION_12</option>
			<option	value="Lara">COM_USERS_REGISTER_ESTADO_OPTION_13</option>
			<option	value="Mérida">COM_USERS_REGISTER_ESTADO_OPTION_14</option>			
			<option	value="Miranda">COM_USERS_REGISTER_ESTADO_OPTION_15</option>
			<option	value="Monagas">COM_USERS_REGISTER_ESTADO_OPTION_16</option>
			<option	value="Nueva Esparta">COM_USERS_REGISTER_ESTADO_OPTION_17</option>
			<option	value="Portuguesa">COM_USERS_REGISTER_ESTADO_OPTION_18</option>
			<option	value="Sucre">COM_USERS_REGISTER_ESTADO_OPTION_19</option>
			<option	value="Táchira">COM_USERS_REGISTER_ESTADO_OPTION_20</option>
			<option	value="Trujillo">COM_USERS_REGISTER_ESTADO_OPTION_21</option>
			<option	value="Vargas">COM_USERS_REGISTER_ESTADO_OPTION_22</option>
			<option	value="Yaracuy">COM_USERS_REGISTER_ESTADO_OPTION_23</option>
			<option	value="Zulia">COM_USERS_REGISTER_ESTADO_OPTION_24</option>
		</field>

		<field name="telefono" type="text"
			description="COM_USERS_REGISTER_PHONE_DESC"
			filter="string"
			label="COM_USERS_REGISTER_PHONE_LABEL"
			message="COM_USERS_REGISTER_PHONE_MESSAGE"
			required="true"
			size="30"
		/>
		
		<field name="sexo" type="list"
			description="COM_USERS_REGISTER_SEXO_DESC"
			label="COM_USERS_REGISTER_SEXO_LABEL"
			required="true">
			<option	value="">COM_USERS_REGISTER_OPTION_SELECT</option>
			<option	value="F">COM_USERS_REGISTER_SEXO_OPTION_F</option>
			<option	value="M">COM_USERS_REGISTER_SEXO_OPTION_M</option>			
		</field>

		<field name="password1" type="password"
			autocomplete="off"
			class="validate-password"
			description="COM_USERS_DESIRED_PASSWORD"
			field="password2"
			filter="raw"
			label="COM_USERS_PROFILE_PASSWORD1_LABEL"
			message="COM_USERS_PROFILE_PASSWORD1_MESSAGE"
			size="30"
			validate="equals"
		/>

		<field name="password2" type="password"
			autocomplete="off"
			class="validate-password"
			description="COM_USERS_PROFILE_PASSWORD2_DESC"
			filter="raw"
			label="COM_USERS_PROFILE_PASSWORD2_LABEL"
			message="COM_USERS_PROFILE_PASSWORD2_MESSAGE"
			size="30"
		/>

		<field name="email1" type="email"
			description="COM_USERS_PROFILE_EMAIL1_DESC"
			filter="string"
			label="COM_USERS_PROFILE_EMAIL1_LABEL"
			message="COM_USERS_PROFILE_EMAIL1_MESSAGE"
			required="true"
			size="30"
			unique="true"
			validate="email"
		/>

		<field name="email2" type="email"
			description="COM_USERS_PROFILE_EMAIL2_DESC"
			field="email1"
			filter="string"
			label="COM_USERS_PROFILE_EMAIL2_LABEL"
			message="COM_USERS_PROFILE_EMAIL2_MESSAGE"
			required="true"
			size="30"
			validate="equals"
		/>
	</fieldset>
</form>

Modificar el archivo (detalles de cuenta) del administrador en:

Sitio_en_Joomla/administrator/components/com_users/models/forms/user.xml

<?xml version="1.0" encoding="utf-8"?>
<form>
	<fieldset name="user_details">
		<field name="name" type="text"
			class="inputbox"
			description="COM_USERS_USER_FIELD_NAME_DESC"
			label="COM_USERS_USER_FIELD_NAME_LABEL"
			required="true"
			size="30"
		/>

		<field name="apellido" type="text"
			class="inputbox"
			description="COM_USERS_USER_FIELD_APELLIDO_DESC"
			label="COM_USERS_USER_FIELD_APELLIDO_LABEL"
			size="30"
		/>

		<field name="username" type="text"
			class="inputbox"
			description="COM_USERS_USER_FIELD_USERNAME_DESC"
			label="COM_USERS_USER_FIELD_USERNAME_LABEL"
			required="true"
			size="30"
		/>

		<field name="password" type="password"
			autocomplete="off"
			class="inputbox validate-password"
			description="COM_USERS_USER_FIELD_PASSWORD_DESC"
			filter="raw"
			label="JGLOBAL_PASSWORD"
			size="30"
		/>

		<field name="password2" type="password"
			autocomplete="off"
			class="inputbox validate-password"
			description="COM_USERS_USER_FIELD_PASSWORD2_DESC"
			filter="raw"
			label="COM_USERS_USER_FIELD_PASSWORD2_LABEL"
			size="30"
			validate="equals"
			field="password2"
		/>

		<field name="email" type="email"
			class="inputbox"
			description="COM_USERS_USER_FIELD_EMAIL_DESC"
			label="JGLOBAL_EMAIL"
			required="true"
			size="30"
			validate="email"
		/>

		<field name="cedula" type="text"
			class="inputbox"
			description="COM_USERS_USER_FIELD_CEDULA_DESC"
			label="COM_USERS_USER_FIELD_CEDULA_LABEL"
			required="true"
			size="30"
		/>
		
		<field name="fecnac" type="calendar"
			label="COM_USERS_USER_FIELD_FECHA_LABEL"
			description="COM_USERS_USER_FIELD_FECHA_DESC"
			size="30"
			filter="string"
			required="true"
		/>
				
		<field name="telefono" type="text"
			class="inputbox"
			description="COM_USERS_USER_FIELD_PHONE_DESC"
			label="COM_USERS_USER_FIELD_PHONE_LABEL"
			required="true"
			size="30"
		/>

		<field name="sexo" type="list"
			description="COM_USERS_USER_FIELD_SEXO_DESC"
			label="COM_USERS_USER_FIELD_SEXO_LABEL">
			<option	value="">COM_USERS_USERS_OPTION_SELECT</option>
			<option	value="F">COM_USERS_USERS_OPTION_F</option>
			<option	value="M">COM_USERS_USERS_OPTION_M</option>			
		</field>

		<field name="estado" type="list"
			description="COM_USERS_USER_FIELD_ESTADO_DESC"
			label="COM_USERS_USER_FIELD_ESTADO_LABEL"
			message="COM_USERS_USER_FIELD_ESTADO_MESSAGE"
			required="true">
			<option	value="">COM_USERS_USERS_OPTION_SELECT</option>
			<option	value="Amazonas">COM_USERS_USER_FIELD_ESTADO_OPTION_1</option>
			<option	value="Anzoátegui">COM_USERS_USER_FIELD_ESTADO_OPTION_2</option>
			<option	value="Apure">COM_USERS_USER_FIELD_ESTADO_OPTION_3</option>
			<option	value="Aragua">COM_USERS_USER_FIELD_ESTADO_OPTION_4</option>
			<option	value="Barinas">COM_USERS_USER_FIELD_ESTADO_OPTION_5</option>
			<option	value="Bolívar">COM_USERS_USER_FIELD_ESTADO_OPTION_6</option>
			<option	value="Carabobo">COM_USERS_USER_FIELD_ESTADO_OPTION_7</option>
			<option	value="Cojedes">COM_USERS_USER_FIELD_ESTADO_OPTION_8</option>
			<option	value="Delta Amacuro">COM_USERS_USER_FIELD_ESTADO_OPTION_9</option>
			<option	value="Distrito Capital">COM_USERS_USER_FIELD_ESTADO_OPTION_10</option>
			<option	value="Falcón">COM_USERS_USER_FIELD_ESTADO_OPTION_11</option>
			<option	value="Guárico">COM_USERS_USER_FIELD_ESTADO_OPTION_12</option>
			<option	value="Lara">COM_USERS_USER_FIELD_ESTADO_OPTION_13</option>
			<option	value="Mérida">COM_USERS_USER_FIELD_ESTADO_OPTION_14</option>			
			<option	value="Miranda">COM_USERS_USER_FIELD_ESTADO_OPTION_15</option>
			<option	value="Monagas">COM_USERS_USER_FIELD_ESTADO_OPTION_16</option>
			<option	value="Nueva Esparta">COM_USERS_USER_FIELD_ESTADO_OPTION_17</option>
			<option	value="Portuguesa">COM_USERS_USER_FIELD_ESTADO_OPTION_18</option>
			<option	value="Sucre">COM_USERS_USER_FIELD_ESTADO_OPTION_19</option>
			<option	value="Táchira">COM_USERS_USER_FIELD_ESTADO_OPTION_20</option>
			<option	value="Trujillo">COM_USERS_USER_FIELD_ESTADO_OPTION_21</option>
			<option	value="Vargas">COM_USERS_USER_FIELD_ESTADO_OPTION_22</option>
			<option	value="Yaracuy">COM_USERS_USER_FIELD_ESTADO_OPTION_23</option>
			<option	value="Zulia">COM_USERS_USER_FIELD_ESTADO_OPTION_24</option>
		</field>

		<field
			name="registerDate"
			type="calendar"
			class="readonly"
			label="COM_USERS_USER_FIELD_REGISTERDATE_LABEL"
			description="COM_USERS_USER_FIELD_REGISTERDATE_DESC"
			readonly="true"
			format="%Y-%m-%d %H:%M:%S"
			size="22"
			filter="user_utc"
		/>

		<field
			name="lastvisitDate"
			type="calendar"
			class="readonly"
			label="COM_USERS_USER_FIELD_LASTVISIT_LABEL"
			description="COM_USERS_USER_FIELD_LASTVISIT_DESC"
			readonly="true"
			format="%Y-%m-%d %H:%M:%S"
			size="22"
			filter="user_utc"
		/>

		<field
			name="lastResetTime"
			type="calendar"
			class="readonly"
			label="COM_USERS_USER_FIELD_LASTRESET_LABEL"
			description="COM_USERS_USER_FIELD_LASTRESET_DESC"
			readonly="true"
			format="%Y-%m-%d %H:%M:%S"
			size="22"
			filter="user_utc"
		/>

		<field
			name="resetCount"
			type="text"
			class="readonly"
			label="COM_USERS_USER_FIELD_RESETCOUNT_LABEL"
			description ="COM_USERS_USER_FIELD_RESETCOUNT_DESC"
			default="0"
			readonly="true"
			/>

		<field
				name="sendEmail"
				type="radio"
				default="0"
				label="COM_USERS_USER_FIELD_SENDEMAIL_LABEL"
				description="COM_USERS_USER_FIELD_SENDEMAIL_DESC">
				<option
					value="0">JNO</option>
				<option
					value="1">JYES</option>
		</field>

		<field
				name="block"
				type="radio"
				default="0"
				label="COM_USERS_USER_FIELD_BLOCK_LABEL"
				description="COM_USERS_USER_FIELD_BLOCK_DESC">
				<option
					value="0">JNO</option>
				<option
					value="1">JYES</option>
		</field>

		<field
			name="id"
			type="text"
			class="readonly"
			label="JGLOBAL_FIELD_ID_LABEL"
			description ="JGLOBAL_FIELD_ID_DESC"
			default="0"
			readonly="true"
			/>

	</fieldset>
	<field name="groups" type="hidden" />

	<fields name="params">

		<!--  Basic user account settings. -->
		<fieldset name="settings" label="COM_USERS_SETTINGS_FIELDSET_LABEL">

			<field name="admin_style" type="templatestyle"
				client="administrator"
				description="COM_USERS_USER_FIELD_BACKEND_TEMPLATE_DESC"
				label="COM_USERS_USER_FIELD_BACKEND_TEMPLATE_LABEL"
			>
				<option value="">JOPTION_USE_DEFAULT</option>
			</field>

			<field name="admin_language" type="language"
				client="administrator"
				description="COM_USERS_USER_FIELD_BACKEND_LANGUAGE_DESC"
				label="COM_USERS_USER_FIELD_BACKEND_LANGUAGE_LABEL"
			>
				<option value="">JOPTION_USE_DEFAULT</option>
			</field>

			<field name="language" type="language"
				client="site"
				description="COM_USERS_USER_FIELD_FRONTEND_LANGUAGE_DESC"
				label="COM_USERS_USER_FIELD_FRONTEND_LANGUAGE_LABEL"
			>
				<option value="">JOPTION_USE_DEFAULT</option>
			</field>

			<field name="editor" type="plugins" folder="editors"
				description="COM_USERS_USER_FIELD_EDITOR_DESC"
				label="COM_USERS_USER_FIELD_EDITOR_LABEL"
			>
				<option value="">JOPTION_USE_DEFAULT</option>
			</field>

			<field name="helpsite" type="helpsite"
				label="COM_USERS_USER_FIELD_HELPSITE_LABEL"
				description="COM_USERS_USER_FIELD_HELPSITE_DESC"
			>
				<option value="">JOPTION_USE_DEFAULT</option>
			</field>

			<field name="timezone" type="timezone"
				label="COM_USERS_USER_FIELD_TIMEZONE_LABEL"
				description="COM_USERS_USER_FIELD_TIMEZONE_DESC"
			>
				<option value="">JOPTION_USE_DEFAULT</option>
			</field>
		</fieldset>
	</fields>
</form>


luego instalamos el pluging registration_validation como cualquier extención de jommla y debería funcionar.
