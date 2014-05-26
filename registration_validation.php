<?php
/**
 * @package     Joomla.Plugin
 * @subpackage  System.Registration Validation
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined( '_JEXEC' ) or die( 'Restricted access' );

class plgSystemRegistration_validation extends JPlugin
{        
	protected $autoloadLanguage = true;
	public function onBeforeRender()
	{
		$app = JFactory::getApplication();
		if($app->isAdmin()){
			return true;
		}
		
		if($app->input->get('option', '') != 'com_users'){
			return true;
		}
		
		if($app->input->get('view', '') != 'registration'){
			return true;
		}
			
		$doc = JFactory::getDocument();
                $doc->addScript('plugins/'.$this->_type.'/'.$this->_name.'/tmpl/validation.js');
                $doc->addScript('plugins/'.$this->_type.'/'.$this->_name.'/tmpl/datetimepicker/bower.json');
                $doc->addScript('plugins/'.$this->_type.'/'.$this->_name.'/tmpl/datetimepicker/date-functions.js');
                $doc->addScript('plugins/'.$this->_type.'/'.$this->_name.'/tmpl/datetimepicker/datetimepicker.jquery.json');
                        $doc->addScript('plugins/'.$this->_type.'/'.$this->_name.'/tmpl/datetimepicker/jquery.datetimepicker.js');
                        $doc->addStyleSheet('plugins/'.$this->_type.'/'.$this->_name.'/tmpl/style.css');
                        $doc->addStyleSheet('plugins/'.$this->_type.'/'.$this->_name.'/tmpl/datetimepicker/jquery.datetimepicker.css');
		return true;
	}
	
	public function onAfterRoute()
	{
		$app = JFactory::getApplication();
		if($app->input->get('plg', '') != 'registration_validation'){
			return true;
		}
	
		$task = $app->input->get('task', '');
		switch ($task){
                    
			case 'validate_username' : 
					$username = htmlspecialchars(mysql_real_escape_string(strip_tags($app->input->post->getString('username', ''))));
					$response = array('error' => false, 'msg' => '');
					if($username == "" || $this->isUsernameExists($username)){
						$response = array('error' => false, 'msg' => JText::_('El Nombre de Usuario "<b style="color: #51DDFF">'. $username .'</b>"  está en uso, por favor elija otro.'));
					}
                                        if($this->isUsernameNoExists($username)){
						$response = array('error' => true, 'msg' => JText::_('Usuario "<b style="color: #51DDFF">'. $username .'</b>" está disponible.'));
					}
					break;
					
			case 'validate_email' : 
					$email 	  = htmlspecialchars(mysql_real_escape_string(strip_tags($app->input->post->getString('email', ''))));
                                        $response = array('error' => false, 'msg' => '');
                                        if($this->isEmailExists($email)){
                                            $response = array('error' => false, 'msg' => JText::_('El correo electrónico "<b style="color: #51DDFF">'. $email .'</b>"  está en uso, por favor elija otro.'));
                                        }
					if($this->isEmailNoExists($email)){
					   $response = array('error' => true, 'msg' => JText::_('El Correo electrónico "<b style="color: #51DDFF">'. $email .'</b>" está disponible.'));
					}
					break;
                        case 'validate_cedula':
                                        $cedula  = htmlspecialchars(mysql_real_escape_string(strip_tags($app->input->post->getString('cedula', ''))));
                                        $response = array('error' => false, 'msg' => '');
                                        if($this->isCedulaExists($cedula)){
                                            $response = array('error' => false, 'msg' => JText::_('El número de Cédula "<b style="color: #51DDFF">'. $cedula .'</b>"  está en uso, por favor elija otro.'));
                                        }
					if($this->isCedulaNoExists($cedula)){
					   $response = array('error' => true, 'msg' => JText::_('El número de Cédula no está en uso.'));
					}
					break;
		}
		
		echo json_encode($response);
		exit();		
	}
	
	public function isUsernameExists($username) {
        if (!preg_match('/^\s*[a-zA-Z0-9_\s]+\s*$/', $username) || strlen($username) < 3) {
            return false;
        } else {
            // Get the database object and a new query object.
            $db = JFactory::getDbo();
            $query = $db->getQuery(true);

            // Build the query.
            $query->select('COUNT(*)')
                    ->from('#__users')
                    ->where('username = ' . $db->quote($username));

            // Set and query the database.
            $db->setQuery($query);
            $duplicate = (bool) $db->loadResult();

            if ($duplicate) {
                return true;
            }

            return false;
        }
    }

    public function isUsernameNoExists($username) {
        // Get the database object and a new query object.
        $db = JFactory::getDbo();
        $query = $db->getQuery(true);

        // Build the query.
        $query->select('COUNT(*)')
                ->from('#__users')
                ->where('username = ' . $db->quote($username));

        // Set and query the database.
        $db->setQuery($query);
        $duplicate = (bool) $db->loadResult();

        if ($duplicate) {
            return false;
        }

        return true;
    }

    public function isEmailExists($email) {
        
            // Get the database object and a new query object.
            $db = JFactory::getDbo();
            $query = $db->getQuery(true);

            // Build the query.
            $query->select('COUNT(*)')
                    ->from('#__users')
                    ->where('email = ' . $db->quote($email));

            // Set and query the database.
            $db->setQuery($query);
            $duplicate = (bool) $db->loadResult();

            if ($duplicate) {
                return true;
            }

            return false;
    }

    public function isEmailNoExists($email) {
        // Get the database object and a new query object.
        $db = JFactory::getDbo();
        $query = $db->getQuery(true);

        // Build the query.
        $query->select('COUNT(*)')
                ->from('#__users')
                ->where('email = ' . $db->quote($email));

        // Set and query the database.
        $db->setQuery($query);
        $duplicate = (bool) $db->loadResult();

        if ($duplicate) {
            return false;
        }

        return true;
    } 
    
    
   public function isCedulaExists($cedula){
       // Get the database object and a new query object.
            $db = JFactory::getDbo();
            $query = $db->getQuery(true);

            // Build the query.
            $query->select('COUNT(*)')
                    ->from('#__users')
                    ->where('cedula = ' . $db->quote($cedula));

            // Set and query the database.
            $db->setQuery($query);
            $duplicate = (bool) $db->loadResult();

            if ($duplicate) {
                return true;
            }

            return false;
       
       
    }
    
    
    
   public function isCedulaNoExists($cedula){

        // Get the database object and a new query object.
        $db = JFactory::getDbo();
        $query = $db->getQuery(true);

        // Build the query.
        $query->select('COUNT(*)')
                ->from('#__users')
                ->where('cedula = ' . $db->quote($cedula));

        // Set and query the database.
        $db->setQuery($query);
        $duplicate = (bool) $db->loadResult();

        if ($duplicate) {
            return false;
        }

        return true;
        
    }
    	
	
}
